import { useOutletContext } from "react-router-dom";
import { fetchChartData } from "../api";
import { useQuery } from "@tanstack/react-query";

interface ChartProps {
  coinId: string;
}
export default function Charts() {
  //type 선언해줘야 잘 동작함
  const { coinId } = useOutletContext<ChartProps>();
  const { data, isLoading } = useQuery({
    queryKey: ["chartsInfo", coinId],
    queryFn: () => fetchChartData(coinId),
  });
  console.log(data);
  return <div>charts</div>;
}
