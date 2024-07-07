import { useQuery } from "@tanstack/react-query";
import { disneyApi } from "../api/api";
import disneyInfoKeys from "../queryKey";

const useQueryList = (id: number) => {
  return useQuery({
    queryKey: disneyInfoKeys.listInfoList(id),
    queryFn: () => disneyApi.disneyList(),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

export default useQueryList;
