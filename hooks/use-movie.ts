import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (movie_id: number) => {
	const { data, error, isLoading } = useSWR(`/api/movie/${movie_id}`, fetcher);

	return { data, error, isLoading };
};

export default useMovie;
