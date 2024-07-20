"use client";

import React, { useEffect, useState } from "react";

// swr 이란...? 알아보기
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await res.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? <div>loading</div> : JSON.stringify(movies)}</div>;
}
