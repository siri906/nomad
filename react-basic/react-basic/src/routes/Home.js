import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    // const json = await res.json();
    // --------------------------------------------- 위 아래 같은 소스
    const res = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setMovies(res.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // 요즘은 async-await를 쓴댜 마! fetch 잘 안쓴데 (async = 비동기) / 왜쓰지..? 난 잘 모르것는디..
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setMovies(json.data.setMovies);
    //     setLoading(false);
    //   });

    getMovies();
  }, []);

  console.log(movies, "movies");
  return (
    <div>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <div>
          <div>
            {movies.map((movie) => {
              return <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
