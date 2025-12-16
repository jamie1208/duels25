import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/guest.css";

const LandingPage = () => {
  let [name, setName] = useState();
  const ngv = useNavigate();

  let cancelHandler = (e) => {
    console.log(e);
    ngv("/");
  };

  let confirmHandler = (e) => {
    console.log(e);
    ngv("/match");
  };

  return (
    <div className="screen">
      <div class="panel">
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
          >
            取消
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              confirmHandler("confirm");
            }}
          >
            確定
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
