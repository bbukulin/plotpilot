import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMoviePoster = (movie_id: string) => {
	const { data, error, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=de52c16cf7535b36be05a1a401cba344`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	return { data, error, isLoading };
};

export default useMoviePoster;
