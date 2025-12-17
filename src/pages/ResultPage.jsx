import "../style/result.css";
import { useNavigate } from "react-router-dom";
const ResultPage = (win) => {
  let ngv = useNavigate();
  return (
    <div className="win-screen">
      <div className="image">
        <div className="hearts">
          <span className="heart full">♥</span>
          <span className="heart empty">♥</span>
          <span className="heart empty">♥</span>
        </div>

        <div className="game-over">
          GAME
          <br />
          OVER
        </div>

        <div className="lose-win">{win ? "YOU WIN" : "YOU LOOSE"}</div>
      </div>
      <div className="result-buttons">
        <button
          className="btn replay"
          onClick={() => {
            ngv("/guest");
          }}
        >
          🔄 再玩一次
        </button>
        <button
          className="btn exit"
          onClick={() => {
            ngv("/");
          }}
        >
          🚪 離開
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
