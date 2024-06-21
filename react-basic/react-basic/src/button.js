import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ text, onClick }) {
  return (
    // <button
    //   style={{
    //     backgroundColor: "tomato",
    //     color: "#fff",
    //   }}
    // >
    //   {text}
    // </button>

    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
