import styled from "styled-components";
import useQueryMovies from "../service/query/useQueryMovies";
import { MovieDataInfo } from "../types/movieType";
import { makeImagePath } from "../utills";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  background: #000;
  overflow-x: hidden;
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

const Slider = styled.div`
  position: relative;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  grid-template-columns: repeat(6, 1fr);
`;

const Box = styled(motion.div)`
  color: #000;
  background: #fff;
  height: 200px;
`;

const rowAni = {
  hidden: {
    x: window.innerWidth,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth,
  },
};

export default function Home() {
  const { data, isLoading, isSuccess } = useQueryMovies();
  const moviesData: MovieDataInfo = isSuccess ? data : [];
  const [index, setIndex] = useState(0);
  const increaseIdx = () => setIndex((prev) => prev + 1);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner onClick={increaseIdx} bgPhoto={makeImagePath(moviesData.results[0].backdrop_path)}>
            <Title>{moviesData.results[0].title}</Title>
            <Overview>{moviesData.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              <Row key={index} variants={rowAni} initial="hidden" animate="visible" exit="exit" transition={{ type: "tween", duration: 0.5 }}>
                {[1, 2, 3, 4, 5, 6].map((item, idx) => {
                  return <Box>{item}</Box>;
                })}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
