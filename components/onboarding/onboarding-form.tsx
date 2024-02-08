"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { onboarding } from "@/actions/onboarding";
import YearDisplay from "@/lib/yeardisplay";
import useMovieList from "@/hooks/use-movie-list";

const OnboardingSchema = z.object({
	onboardingMovies: z
		.array(z.number())
		.refine((value) => value.some((item) => item)),
});

const OnboardingForm = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");

	const [isPending, startTransition] = useTransition();
	const { data, isLoading } = useMovieList();

	const form = useForm<z.z.infer<typeof OnboardingSchema>>({
		resolver: zodResolver(OnboardingSchema),
		defaultValues: {
			onboardingMovies: [],
		},
	});

	const onSubmit = (values: z.infer<typeof OnboardingSchema>) => {
		setError("");
		setSuccess("");

		const uncheckedMovieIds = data
			?.filter(
				(movie: any) =>
					!form.getValues().onboardingMovies.includes(movie.movie_id)
			)
			.map((movie: any) => movie.movie_id);

		//console.log(uncheckedMovieIds);

		startTransition(() => {
			onboarding(values, uncheckedMovieIds).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);
			});
		});
	};

	return (
		<CardWrapper headerLabel="Welcome to onboarding!">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="onboardingMovies"
							render={() => (
								<FormItem>
									<FormLabel>Please select movies you like</FormLabel>
									<FormDescription className="leading-tight pb-4">
										We will recommend you new movies based on your selection.
										The ones you do not select will be marked as disliked.
									</FormDescription>
									{isLoading && <div>Loading...</div>}
									{data?.map((movie: any) => (
										<FormField
											key={movie.movie_id}
											control={form.control}
											name="onboardingMovies"
											render={({ field }) => {
												return (
													<FormItem
														key={movie.movie_id}
														className="flex flex-row items-start space-x-3 space-y-0">
														<FormControl>
															<Checkbox
																checked={field.value?.includes(movie.movie_id)}
																onCheckedChange={(checked) => {
																	return checked
																		? field.onChange([
																				...field.value,
																				movie.movie_id,
																		  ])
																		: field.onChange(
																				field.value?.filter(
																					(value: any) =>
																						value !== movie.movie_id
																				)
																		  );
																}}
															/>
														</FormControl>
														<FormLabel>
															{movie.title}{" "}
															<span className="text-xs text-gray-500">
																({YearDisplay(movie?.release_date)})
															</span>
														</FormLabel>
														<FormMessage {...field} />
													</FormItem>
												);
											}}
										/>
									))}
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button
						disabled={isPending}
						type="submit"
						className="w-full font-medium">
						Lets go!
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default OnboardingForm;
