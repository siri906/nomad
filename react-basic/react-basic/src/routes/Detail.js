import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { linkId } = useParams();
  const [movieDetail, setMovieDetail] = useState("");

  const getDetailInfo = useCallback(async () => {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${linkId}`);
    const json = await res.json();
    setMovieDetail(json.data.movie);
  }, [linkId]);

  useEffect(() => {
    getDetailInfo();
  }, [getDetailInfo]);
  const { title, medium_cover_image, description_intro } = movieDetail;
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h1>{title}</h1>
      <p>{description_intro}</p>
    </div>
  );
}
