import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  console.log(id, "id");
  const [loading, setLoading] = useState(true);
  const [marvelDetail, setMarvelDetail] = useState([]);

  const getMarvelDetail = useCallback(async () => {
    const res = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)).json();
    setMarvelDetail(res.data.results[0]);
    console.log(res);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMarvelDetail();
  }, [getMarvelDetail]);

  return (
    <>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <div className={styles.wrap_detail}>
          <div className={styles.img_area}>
            <img src={`${marvelDetail.thumbnail.path}.${marvelDetail.thumbnail.extension}`} alt={marvelDetail.name} />
          </div>
          <h2>{marvelDetail.name}</h2>
          {marvelDetail.description ? <p className={styles.desc}>{marvelDetail.description}</p> : <p>There is no Description</p>}
        </div>
      )}
    </>
  );
}
