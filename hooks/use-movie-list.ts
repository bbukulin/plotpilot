import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = (genre: string) => {
	const { data, error, isLoading } = useSWR(`/api/movie`, fetcher);

	return { data, error, isLoading };
};

export default useMovieList;
