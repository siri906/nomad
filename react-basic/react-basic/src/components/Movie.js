import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <Link to={`/movie/${id}`}>{title}</Link>
        <p>{summary}</p>
        <ul>
          {genres?.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
