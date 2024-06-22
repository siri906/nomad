import { useEffect, useState } from "react";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [marvelInfos, setMarvelInfos] = useState([]);

  const getMarvelInfo = async () => {
    const res = await (await fetch(process.env.REACT_APP_MARVEL_API)).json();
    setMarvelInfos(res.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMarvelInfo();
  }, []);

  return (
    <>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <>
          <div className={styles.wrap_info}>
            {marvelInfos.map((marvelInfo) => {
              return (
                <Link to={`/detail/${marvelInfo.id}`} className={styles.bx_info} key={marvelInfo.id}>
                  <div className={styles.img_area}>
                    <img src={`${marvelInfo.thumbnail.path}.${marvelInfo.thumbnail.extension}`} alt={marvelInfo.name} />
                  </div>
                  <div className={styles.name_area}>
                    <h2>{marvelInfo.name}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
