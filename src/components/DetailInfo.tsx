import { Link, useParams } from "react-router-dom";
import useQueryCharDetail from "../service/queryFn/useQueryCharDetail";
import styled from "styled-components";

type charDetail = {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
};

export default function DetailInfo() {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useQueryCharDetail(Number(id));
  const charDetailData: charDetail = isSuccess ? data : [];
  console.log(charDetailData, " charDetailData");

  const AllWrap = styled.div<{ url: string }>`
    display: flex;
    justify-content: center;
    .left_area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        display: block;
        margin-top: 20px;
      }
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      ul {
        li + li {
          margin-top: 5px;
        }
      }
    }
    .right_area {
      background: url(${(props) => props.url}) center right no-repeat;
      background-size: contain;
      width: 50%;
      height: 100vh;
      &::after {
        content: "";
        position: absolute;
        background: white;
        z-index: 1;
        inset: 0;
        opacity: 0.2;
      }
    }
  `;

  return (
    <AllWrap url={charDetailData.imageUrl}>
      <div className="left_area">
        <div>
          <h2>{charDetailData.name}</h2>
          <ul>
            {charDetailData.films?.map((film) => (
              <li>{film}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={charDetailData.sourceUrl}>{charDetailData.sourceUrl}</Link>
        </div>
      </div>
      <div className="right_area"></div>
    </AllWrap>
  );
}
