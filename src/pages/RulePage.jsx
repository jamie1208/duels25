import "../style/rule.css";
import { useNavigate } from "react-router-dom";

const RulePage = () => {
  const ngv = useNavigate();
  return (
    <div className="page">
      <div className="rule-paper">
        {/* 木頭標題 */}
        <div className="rule-header">
          <span>玩法說明</span>
        </div>

        {/* 內容 */}
        <div className="rule-body">
          <section>
            <h3>👥 回合流程</h3>
            <ol>
              <li>雙方各自從手牌選 1 張牌</li>
              <li>面朝下同時放出</li>
              <li>雙方一起翻開</li>
              <li>依牌面效果結算</li>
              <li>若雙方仍存活，各抽 1 張牌（補回 5 張）</li>
            </ol>
          </section>

          <section>
            <h3>🧩 牌的功能</h3>
            <ul>
              <li>
                ♠️ ♣️ <b>攻擊牌</b>： 對對手造成該牌點數的傷害
                （A=1、J=11、Q=12、K=13）
              </li>
              <li>
                ♦️ <b>反擊牌</b>： 僅在對手出攻擊牌時有效，可完全躲避攻擊，
                並造成方塊點數的反傷
              </li>
              <li>
                ♥️ <b>回血牌</b>： 依點數回復自己生命值，上限為 25
              </li>
            </ul>
          </section>

          <section className="rule-warning">
            <h3>⚔️ 攻擊先行（重要）</h3>
            <p>
              當攻擊牌與回血牌同時出現時，<b>攻擊一律先結算</b>。
            </p>
            <p>
              若攻擊造成致命傷害（生命值 ≤ 0），
              <b>遊戲立即結束，不會再觸發回血</b>。
            </p>
          </section>
        </div>

        <button
          className="rule-confirm-btn"
          onClick={() => {
            ngv("/");
          }}
        >
          我知道了
        </button>
      </div>
    </div>
  );
};

export default RulePage;
