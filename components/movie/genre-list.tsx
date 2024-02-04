import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

const GenreList = () => {
	return (
		<Carousel>
			<CarouselContent>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Action</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Adventure</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Animation</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Comedy</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Crime</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Documentary</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Drama</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Family</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Fantasy</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Foreign</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>History</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Horror</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Music</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Mistery</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Romance</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Science Fiction</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Thriller</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>TV Movie</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>War</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-1/4">
					<Card>
						<CardContent className="p-4 flex items-center justify-center">
							<p>Western</p>
						</CardContent>
					</Card>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default GenreList;
