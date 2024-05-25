import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Staking from "../pages/StakingPage/Staking";
import Dashboard from "../pages/Dashboard/Dashboard";
import Swap from "../pages/SwapPage/Swap";


function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
