import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  cards: number;
};

const SkeletonLoading = ({ cards }: Props) => {
  const arr = Array(cards);
  arr.fill(0);

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_card, idx) => {
    return (
      <li key={idx}>
        <div className="list_skeleton">
          <div className="bx_img">
            <Skeleton width={"100%"} height={150} />
          </div>
          <p className="name">
            <Skeleton width={"100%"} />
          </p>
        </div>
      </li>
    );
  }) as any;
};

export default SkeletonLoading;
