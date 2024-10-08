import { useOutletContext } from "react-router-dom";
import { fetchChartData } from "../api";
import { useQuery } from "@tanstack/react-query";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface ChartProps {
  coinId: string;
}

interface ChartsInfo {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Charts() {
  //type 선언해줘야 잘 동작함
  const { coinId } = useOutletContext<ChartProps>();
  const { data, isLoading } = useQuery<ChartsInfo[]>({
    queryKey: ["chartsInfo", coinId],
    queryFn: () => fetchChartData(coinId),
  });
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <ReactApexChart
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 350,
                type: "line",
                zoom: {
                  enabled: false,
                },
              },
            }}
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close) as number[],
              },
            ]}
            type="line"
            height={350}
          />
        </div>
      )}
    </div>
  );
}
