import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  console.log(movies, "movies");
  return <h6>{JSON.stringify(movies)}</h6>;
}
