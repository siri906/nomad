import { Suspense, useEffect, useState } from "react";
import MainInfo from "../components/MainInfo";
import useQueryCharList from "../service/queryFn/useQueryCharList";
import { DisneyList } from "../types/DisneyInfoData";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [sliceCount, setSliceCount] = useState(0);
  const { data, isSuccess, isLoading } = useQueryCharList(sliceCount);
  const charListData: DisneyList[] = isSuccess ? data : [];
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) setSliceCount((prev) => prev + 1);
  }, [inView]);

  return (
    <div>
      <MainInfo charListData={charListData} isLoading={isLoading} />
      <div ref={ref} className="line" style={{ height: "150px" }} />
    </div>
  );
}
