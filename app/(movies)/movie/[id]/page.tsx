import React from "react";
import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideo(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  //이렇게 작성하면 병렬 적으로 데이터를 가져오게 되어 버린다
  // console.log('start fetching');
  // // const movie = await getMovie(id);
  // // const video = await getVideo(id);
  // console.log('end fetching');

  //동시에 가져오려면 Promise.all을 사용한다
  console.log("start fetching");
  // 이상태는 영화, 비디오 데이터를 둘다 가져와야지만 변수 사용이 가능하다 둘중 하나라도 완료되면 사용 할 수 있도록 변경
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  console.log("end fetching");
  return <div>{movie.title}</div>;
}
