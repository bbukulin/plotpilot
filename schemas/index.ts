import * as z from "zod";

export const SettingsSchema = z
	.object({
		name: z.optional(z.string()),
		email: z.optional(z.string().email()),
		password: z.optional(z.string().min(6)),
		newPassword: z.optional(z.string().min(6)),
	})
	.refine(
		(data) => {
			if (data.password && !data.newPassword) {
				return false;
			}

			return true;
		},
		{
			message: "New password is required!",
			path: ["newPassword"],
		}
	)
	.refine(
		(data) => {
			if (data.newPassword && !data.password) {
				return false;
			}

			return true;
		},
		{
			message: "Password is required!",
			path: ["password"],
		}
	);

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(6, "Minimum 6 characters required"),
	name: z.string().min(1, "Name is required"),
});

export const ResetSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
});

export const NewPasswordSchema = z.object({
	password: z.string().min(6, "Minimum 6 characters required"),
});

export const OnboardingSchema = z.object({
	onboardingMovies: z.number().array().min(5, "Minimum 5 movies are required"),
});
