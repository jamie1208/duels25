import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/guest.css";
import { apiMatching } from "../api/gameAPI";

const LandingPage = () => {
  let [name, setName] = useState("");
  let [status, setStatus] = useState("idle"); /*idle, success, fail, loading */
  const ngv = useNavigate();

  let cancelHandler = (e) => {
    console.log(e);
    ngv("/");
  };

  let confirmHandler = async (e) => {
    console.log(e);
    /* ---------- wait for matching ---------- */
    setStatus("loading");
    /*30s 時間限制，時間到=配對失敗,退回上一頁 */
    const timeoutId = setTimeout(() => {
      setStatus("fail");
    }, 3000);

    const success = await apiMatching(name);
    console.log(success);
    if (success) {
      clearTimeout(timeoutId);
      setStatus("success");
      setTimeout(() => {
        ngv("/game");
      });
    }
  };
  useEffect(() => {
    if (status !== "fail") return;
    const t = setTimeout(() => {
      ngv("/");
    }, 2000); //配對失敗, 顯示訊息, 2秒後回到landingPage
    return () => {
      clearTimeout(t);
    };
  }, [status]);

  return (
    <div className="screen">
      <div className="panel">
        <div className="hint">請輸入名稱</div>
        <div className="line"></div>
        <input
          className="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="例如：Jamie"
          maxLength={16}
        />
        <div className="line"></div>
        <div className="btnRow">
          <button
            className="btn"
            type="button"
            onClick={() => {
              cancelHandler("cancel");
            }}
            disabled={status == "loading"}
          >
            取消
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              confirmHandler("confirm");
            }}
            disabled={status == "loading"}
          >
            確定
          </button>
        </div>
        <div className="matchStatus">
          {status == "loading" && <p>配對中，請稍候...</p>}
          {status == "success" && (
            <p className="ok">配對成功，即將開始遊戲...</p>
          )}
          {status == "fail" && <p className="fail">配對失敗，請稍後再試...</p>}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
