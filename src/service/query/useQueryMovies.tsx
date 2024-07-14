import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

const useQueryMovies = () => {
  return useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => getMovies(),
  });
};

export default useQueryMovies;
