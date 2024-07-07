import { Link } from "react-router-dom";
import { DisneyList } from "../types/DisneyInfoData";

import SkeletonLoading from "../SkeletonLoading";
import styled from "styled-components";

type Props = {
  charListData: DisneyList[];
  isLoading: boolean;
};

const BoxImages = styled.div<{ url: string }>`
  margin-bottom: 10px;
  overflow: hidden;
  span {
    &:after {
      display: block;
      width: 200px;
      height: 200px;
      background: url(${(props) => props.url}) center center no-repeat;
      background-size: contain;
      margin: 0 auto;
      content: "";
    }
  }
`;

export default function MainInfo({ charListData, isLoading }: Props) {
  return (
    <div>
      <ul className="list_char">
        {isLoading && <SkeletonLoading cards={20} />}
        {charListData.map((charInfo) => {
          return (
            <li key={charInfo.id}>
              <Link to={`/character/${charInfo.id}`}>
                <BoxImages url={charInfo.imageUrl}>
                  <span></span>
                </BoxImages>
                <p className="name">{charInfo.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
