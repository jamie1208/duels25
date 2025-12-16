import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MatchmakingPage = () => {
  //   let ngv = useNavigate();

  //   useEffect(() => {
  //     // send request to backend, fetch and start game
  //     const timer = setTimeout(() => {
  //       ngv("/game");
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }, []);

  //   let buttonHandler = (e) => {
  //     ngv("/");
  //   };

  return (
    <div>MatchmakingPage</div>
    //     <div className="MatchPage">
    //       <h1>正在配對對手... </h1>
    //       <p>waiting...</p>
    //       <button
    //         onClick={buttonHandler}
    //         style={{
    //           border: "1px solid #0e0101ff",
    //           borderRadius: "2rem",
    //           fontSize: "2rem",
    //         }}
    //       >
    //         取消配對
    //       </button>
    //     </div>
  );
};

export default MatchmakingPage;
