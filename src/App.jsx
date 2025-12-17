import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";

import ResultPage from "./pages/ResultPage";
import GuestPage from "./pages/GuestPage";
import RulePage from "./pages/RulePage";
function App() {
  let [win, setWin] = useState(1); //win?1:0
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/rule" element={<RulePage />} />
        <Route path="/game" element={<GamePage setWin={setWin} />} />
        <Route path="/end" element={<ResultPage win={win} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
