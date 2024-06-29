import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
    children: [
      {
        path: "/:coinId",
        element: <Coin />,
      },
    ],
  },
]);

export default Router;
