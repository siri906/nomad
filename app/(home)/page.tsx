import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = fetch(URL).then((resultData) => resultData.json());
  return data;
}

export default async function Home() {
  const movies = await getMovie();
  return <div>{JSON.stringify(movies)}</div>;
}
