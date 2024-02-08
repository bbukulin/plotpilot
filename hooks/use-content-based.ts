import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useContentBased = () => {
	const { data, error, isLoading } = useSWR(`/api/contentBased`, fetcher);

	return { data, error, isLoading };
};

export default useContentBased;
