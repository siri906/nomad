import { useEffect, useState } from "react";
import Button from "./button";
import styles from "./Button.module.css";

function Hello() {
  useEffect(() => {
    console.log("show hello");

    return () => {
      console.log("hide hello");
    };
  }, []);

  return <div>Hello</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect(() => {
  //   // console.log("call api");
  // }, []);

  // useEffect(() => {
  //   if (keyword ?? "") {
  //     // console.log("search");
  //   }
  // }, [keyword]);

  const handleChangeVisible = () => setShowing((prev) => !prev);

  // console.log("all time do");
  return (
    <div className="App">
      <h1 className={styles.title}>welcom back!!!!</h1>
      <input value={keyword} onChange={onChange} type="input" placeholder="Search here.." />
      <p>{counter}</p>
      <Button onClick={onClick} text={"Click me"} />

      <div style={{ marginTop: "50px" }}>
        <button onClick={handleChangeVisible} style={{ marginBottom: "10px" }} type="">
          {showing ? "hide" : "show"}
        </button>

        {showing && <Hello />}
      </div>
    </div>
  );
}

export default App;
