import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { disneyApi } from "../api/api";
import disneyInfoKeys from "../queryKey";

const useQueryCharList = (sliceCount: number) => {
  return useQuery({
    queryKey: disneyInfoKeys.listInfoList(),
    queryFn: () => disneyApi.disneyList(),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    select: (data) => data.slice(0, 100 * sliceCount),
  });
};

export default useQueryCharList;
