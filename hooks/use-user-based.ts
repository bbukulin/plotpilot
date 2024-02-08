import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useUserBased = () => {
	const { data, error, isLoading } = useSWR(`/api/userBased`, fetcher);

	return { data, error, isLoading };
};

export default useUserBased;
