import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import GamePage from "./pages/GamePage";
import MatchmakingPage from "./pages/MatchmakingPage";
// import Result from "./pages/Result";
import Guestpage from "./pages/GuestPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guest" element={<Guestpage />} />
        <Route path="/match" element={<MatchmakingPage />} />
        {/* <Route path="/game" element={<GamePage />} /> */}
        {/* <Route path="/end" element={<Result />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
