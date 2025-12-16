import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/menu.css";

const LandingPage = () => {
  const ngv = useNavigate();

  //取得使用者選擇的模式
  let loginMode = (mode) => {
    console.log(mode);
  };
  let guestMode = (mode) => {
    console.log(mode);
    ngv("/guest");
  };

  return (
    <div className="LandingPage">
      <h1 className="title">Duels 25 Online</h1>
      <div className="btnGroup">
        <button
          className="btnBig"
          type="button"
          onClick={() => {
            loginMode("login_mode");
          }}
        >
          登入模式
        </button>
        <button
          className="btnBig"
          type="button"
          onClick={() => {
            guestMode("guest_mode");
          }}
        >
          訪客模式
        </button>
      </div>
      <button className="btnSmall" type="button">
        玩法說明
      </button>
    </div>
  );
};

export default LandingPage;
