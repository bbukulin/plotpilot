"use client";

import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

import { SettingsSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
	Form,
	FormField,
	FormControl,
	FormItem,
	FormLabel,
	FormDescription,
	FormMessage,
} from "@/components/ui/form";

const Settings = () => {
	const user = useCurrentUser();

	const { update } = useSession();
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			password: undefined,
			newPassword: undefined,
			name: user?.name || undefined,
			email: user?.email || undefined,
		},
	});

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error);
					}

					if (data.success) {
						// Ovo malo radi pa malo ne radi
						update();
						setSuccess(data.success);
					}
				})
				.catch(() => setError("Something went wrong. Please try again later."));
		});
	};

	return (
		<Card className="w-[600px]">
			<CardHeader>
				<p>Settings</p>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="John"
												type="text"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{user?.isOAuth === false && (
								<>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="student@ferit.hr"
														type="email"
														disabled={isPending}
													/>
												</FormControl>
												<FormDescription>
													We will send you an email to confirm your new email
													address.
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Current password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="******"
														type="password"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="newPassword"
										render={({ field }) => (
											<FormItem>
												<FormLabel>New password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="******"
														type="password"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}
						</div>
						<FormError message={error} />
						<FormSuccess message={success} />
						<Button type="submit" disabled={isPending} className="w-full">
							Save
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default Settings;
