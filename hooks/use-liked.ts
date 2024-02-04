import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useLikedMovies = () => {
	const { data, error, isLoading, mutate } = useSWR("/api/liked", fetcher);

	return { data, error, isLoading, mutate };
};

export default useLikedMovies;
