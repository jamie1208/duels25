import "../style/hpbar.css";

export default function HPBar({ hp, maxHp = 25 }) {
  const percent = Math.max(0, Math.min(100, (hp / maxHp) * 100));

  return (
    <div className="hp-bar">
      <div className="hp-circle">
        <span>{hp}</span>
      </div>

      <div className="hp-track">
        <div className="hp-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
