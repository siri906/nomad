import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = fetch(API_URL).then((resultData) => resultData.json());
  return data;
}

export default async function Home() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movieItem) => {
        return (
          <li key={movieItem.id}>
            <Link href={`/movie/${movieItem.id}`}>{movieItem.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
