import styled from "styled-components";
import useQueryMovies from "../service/query/useQueryMovies";
import { MovieDataInfo } from "../types/movieType";
import { makeImagePath } from "../utills";
import { AnimatePresence, delay, motion, px } from "framer-motion";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

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

const Banner = styled.div<{ $bgPhoto: string }>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto}) no-repeat;
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
  padding-bottom: 200px;
`;

const Box = styled(motion.div)<{ $bgPhoto: string }>`
  color: #000;
  background: url(${(props) => props.$bgPhoto}) #fff no-repeat;
  background-size: cover;
  height: 200px;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  cursor: pointer;
`;

const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.white.lighter};
  background: ${(props) => props.theme.black.lighter};
  opacity: 0;
  h4 {
    font-size: 18px;
    text-align: center;
  }
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

const boxAni = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    zIndex: 100,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoAni = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};
const offset = 6;

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const bigMovieMatch = useMatch("/movie/:movieId");

  const { data, isLoading, isSuccess } = useQueryMovies();
  const moviesData: MovieDataInfo = isSuccess ? data : [];

  console.log(bigMovieMatch, "bigMovieMatch");

  const increaseIdx = () => {
    if (leaving) {
      return;
    } else {
      toggleLeaving();
      const totalMovie = moviesData.results.length - 1;
      const maxIndex = Math.floor(totalMovie / offset) - 1;
      setIndex((prev) => {
        return prev === maxIndex ? 0 : prev + 1;
      });
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIdx}
            $bgPhoto={makeImagePath(moviesData.results[0].backdrop_path)}
          >
            <Title>{moviesData.results[0].title}</Title>
            <Overview>{moviesData.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowAni}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
              >
                {moviesData.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie, idx) => {
                    return (
                      <Box
                        onClick={() => onBoxClick(movie.id)}
                        whileHover="hover"
                        initial="normal"
                        variants={boxAni}
                        key={movie.id}
                        transition={{ type: "tween" }}
                        $bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                        layoutId={movie.id + ""}
                      >
                        <Info variants={infoAni}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    );
                  })}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch !== null ? (
              <motion.div
                layoutId={bigMovieMatch.params.movieId + ""}
                style={{
                  position: "absolute",
                  width: "40vw",
                  height: "80vh",
                  backgroundColor: "#fff",
                  top: 50,
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }}
              >
                test
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
