import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
