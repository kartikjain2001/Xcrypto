import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Exchanges from "./components/Exchanges.jsx";
import Coins from "./components/Coins.jsx";
import CoinDetails from "./components/CoinDetails.jsx";
function App() {
  return (
    <Routers>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Routers>
  );
}

export default App;
