import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useDislikedMovies = () => {
	const { data, error, isLoading, mutate } = useSWR("/api/disliked", fetcher);

	return { data, error, isLoading, mutate };
};

export default useDislikedMovies;
