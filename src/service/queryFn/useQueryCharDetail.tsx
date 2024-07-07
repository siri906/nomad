import { useQuery } from "@tanstack/react-query";
import { disneyApi } from "../api/api";
import disneyInfoKeys from "../queryKey";

const useQueryCharDetail = (id: number) => {
  return useQuery({
    queryKey: disneyInfoKeys.detailInfoList(id),
    queryFn: () => disneyApi.disneyDetailList(id),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

export default useQueryCharDetail;
