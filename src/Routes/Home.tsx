import styled from "styled-components";
import useQueryMovies from "../service/query/useQueryMovies";
import { MovieDataInfo, MovieDataList } from "../types/movieType";
import { makeImagePath } from "../utills";

const Wrapper = styled.div`
  background: #000;
`;

const Loader = styled.div`
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${(props) => props.bgPhoto}) no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
`;

const Overview = styled.p`
  font-size: 18px;
  width: 60%;
  font-weight: 500;
`;

export default function Home() {
  const { data, isLoading, isSuccess } = useQueryMovies();
  const moviesData: MovieDataInfo = isSuccess ? data : [];
  console.log(moviesData, "data");
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(moviesData.results[0].backdrop_path)}>
            <Title>{moviesData.results[0].title}</Title>
            <Overview>{moviesData.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}
