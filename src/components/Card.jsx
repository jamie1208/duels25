import "../style/card.css";

const suitMap = {
  S: { symbol: "♠", color: "black" },
  H: { symbol: "♥", color: "red" },
  D: { symbol: "♦", color: "red" },
  C: { symbol: "♣", color: "black" },
};

export default function Card({
  value = 0,
  suit = "S",
  faceDown = false,
  selected = 0,
  onClick,
  notshow = 0,
  hover = false,
}) {
  const { symbol, color } = suitMap[suit];
  return (
    <div
      className={`card ${faceDown ? "faceDown" : ""} ${
        selected ? "selected" : ""
      } ${notshow ? "notshow" : ""}${hover ? "hover" : ""}`}
      onClick={onClick}
    >
      <div className="card-container">
        {/* 卡片正面 */}
        <div className="front">
          <div className={`corner top ${color}`}>
            <span>{value}</span>
            <span>{symbol}</span>
          </div>
          <div className={`center ${color}`}>{symbol}</div>
          <div className={`corner bottom ${color}`}>
            <span>{value}</span>
            <span>{symbol}</span>
          </div>
        </div>
        {/* 卡片背面 */}
        <div className="back"></div>
      </div>
    </div>
  );
}
