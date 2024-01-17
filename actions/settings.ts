"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
	const user = await currentUser();

	if (!user) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	if (user.isOAuth) {
		values.email = undefined;
		values.password = undefined;
		values.newPassword = undefined;
	}

	if (values.email && values.email !== user.email) {
		const existingUser = await getUserByEmail(values.email);

		if (existingUser && existingUser.id !== user.id) {
			return { error: "Email already in use!" };
		}

		const verificationToken = await generateVerificationToken(values.email);
		await sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);

		return { success: "Verification email sent!" };
	}

	if (values.password && values.newPassword && dbUser.password) {
		const passwordsMatch = await bcrypt.compare(
			values.password,
			dbUser.password
		);

		if (!passwordsMatch) {
			return { error: "Incorrect current password!" };
		}

		const hashedPassword = await bcrypt.hash(values.newPassword, 10);
		values.password = hashedPassword;
		values.newPassword = undefined;
	}

	await db.user.update({
		where: {
			id: dbUser.id,
		},
		data: {
			...values,
		},
	});

	return { success: "Updated successfully!" };
};
