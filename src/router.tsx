import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Charts from "./routes/Charts";
import Price from "./routes/Price";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coin/:coinId" element={<Coin />}>
          <Route path="chart" element={<Charts />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
