import React, { useState, useEffect } from "react";
// import Card from "../components/Card";
// import HPBar from "../components/HPBar";
// import { useNavigate } from "react-router-dom";
import "../style/style.css";

// const new_data = {
//   turn: 1,
//   me: {
//     nickname: "jamie",
//     hp: 15,
//     deckCount: 19,
//     hand: ["K_S", "4_C", "3_D", "J_H", "5_H"], //HSDC 是花色
//   },
//   opponent: {
//     nickname: "henry",
//     hp: 25,
//     deckCount: 9,
//     hand: ["K_S", "4_R", "J_C", "3_S", "A_D"],
//     playCard: "Q_C", //輪到me時, 對手已經選好了
//   },
//   status: "PLAYING",
// };
// const new_data2 = {
//   turn: 1,
//   me: {
//     nickname: "jamie",
//     hp: 15,
//     deckCount: 18,
//     hand: ["K_S", "4_C", "3_D", "J_H", "5_H"], //HSDC 是花色
//   },
//   opponent: {
//     nickname: "henry",
//     hp: 0,
//     deckCount: 8,
//     hand: ["K_S", "4_R", "J_C", "3_S", "A_D"],
//     playCard: "Q_C", //輪到me時, 對手已經選好了
//   },
//   status: "OVER",
// };
const GamePage = () => {
  //   let ngv = useNavigate();
  //   let [gameState, setGameState] = useState(null); //API 包含目前手中的卡牌,對手的卡牌,hp值,輪到誰
  //   let [loading, setLoading] = useState(true);
  //   let [selectedcardIndex, setSelectedcardIndex] = useState(null);
  //   let [flipped, setFlipped] = useState(false);
  //   let [battlecard, setBattlecard] = useState(null);
  //   let [moveingCard, setMovingCard] = useState(null);
  //   let [ismoving, setismoving] = useState(null);
  //   let [myHp, setmyHp] = useState(null);
  //   let [opponentHp, setOpponentHp] = useState(null);
  //   let [hpAnimation, sethpAnimation] = useState(false);
  //   //遊戲掛載時就fetch 初始資料
  //   useEffect(() => {
  //     //fectch API data
  //     const data = {
  //       turn: 1,
  //       me: {
  //         nickname: "jamie",
  //         hp: 18,
  //         deckCount: 20,
  //         hand: ["K_S", "5_C", "3_D", "J_H", "3_H"], //HSDC 是花色
  //       },
  //       opponent: {
  //         nickname: "henry",
  //         hp: 20,
  //         deckCount: 10,
  //         hand: ["K_S", "4_R", "J_C", "3_S", "A_D"],
  //         playCard: "Q_C", //輪到me時, 對手已經選好了
  //       },
  //       status: "PLAYING",
  //     };
  //     //set initial state
  //     setGameState(data);
  //     setLoading(false);
  //     return;
  //   }, []);
  //   //按下confirm buutton 後
  //   let buttonHandler = (e) => {
  //     //沒有選擇牌
  //     if (!selectedcardIndex) {
  //       alert("沒有選擇牌");
  //       return;
  //     }
  //     if (gameState.turn !== 1) {
  //       return;
  //     }
  //     gameState.turn = -1;
  //     //move hand card
  //     setMovingCard(gameState.me.hand[selectedcardIndex]);
  //     gameState.me.hand.splice(selectedcardIndex, 1);
  //     setismoving(true);
  //     //把選的牌送給後端
  //     //等待後端回傳計算完畢的hp and new state, 翻牌, 輸出結果
  //     const timer = setTimeout(() => {
  //       setFlipped(true);
  //       setmyHp(-5);
  //       setOpponentHp(2);
  //       sethpAnimation(true);
  //     }, 3000);
  //   };
  //   let animationEnd = (e) => {
  //     setBattlecard(moveingCard);
  //     console.log(Array.isArray(gameState.me.hand));
  //     setismoving(false);
  //   };
  //   let hpanimaionEnd = (e) => {
  //     setmyHp(null);
  //     setOpponentHp(null);
  //     sethpAnimation(false);
  //     setGameState(new_data);
  //     setBattlecard(null);
  //     setFlipped(false);
  //   };
  //   if (loading) {
  //     return <div style={{ textAlign: "center" }}>載入遊戲中</div>;
  //   }
  //   return (
  //     <div
  //       style={{
  //         margin: "40px",
  //       }}
  //     >
  //       <div>
  //         {/* 敵方資訊 */}
  //         <HPBar name={gameState.opponent.nickname} hp={gameState.opponent.hp} />
  //         <label>Deck: {gameState.opponent.deckCount}</label>
  //       </div>
  //       <div //   戰鬥區
  //         style={{
  //           display: "flex",
  //           position: "relative",
  //           margin: "10px",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         {/* 對方的戰鬥卡 */}
  //         <div>
  //           <p
  //             className={hpAnimation ? "hp_animation" : ""}
  //             onAnimationEnd={hpanimaionEnd}
  //             style={{
  //               height: "2px",
  //               display: "flex",
  //               justifyContent: "center",
  //               margin: "30px",
  //             }}
  //           >
  //             {opponentHp}
  //           </p>
  //           <Card
  //             value={gameState.opponent.playCard}
  //             flipped={flipped}
  //             isFaceUp={true}
  //           />
  //         </div>
  //         <div
  //           style={{
  //             display: "flex",
  //             textAlign: "center",
  //             fontSize: "40px",
  //             alignItems: "center",
  //           }}
  //         >
  //           VS
  //         </div>
  //         {/* 自己的戰鬥卡 */}
  //         <div>
  //           <p
  //             className={hpAnimation ? "hp_animation" : ""}
  //             onAnimationEnd={hpanimaionEnd}
  //             style={{
  //               height: "2px",
  //               display: "flex",
  //               justifyContent: "center",
  //               margin: "30px",
  //             }}
  //           >
  //             {myHp}
  //           </p>
  //           <Card value={battlecard} notshow={!battlecard} />
  //         </div>
  //       </div>
  //       <div>
  //         {/* 玩家操作 */}
  //         <HPBar name={gameState.me.nickname} hp={gameState.me.hp}></HPBar>
  //         <label>Deck: {gameState.me.deckCount}</label>
  //         <div
  //           style={{
  //             display: "flex",
  //             flexWrap: "wrap",
  //             justifyContent: "space-around",
  //           }}
  //         >
  //           {gameState.me.hand.map((card, index) => (
  //             <Card
  //               value={card}
  //               selected={card === gameState.me.hand[selectedcardIndex]}
  //               onClick={() => setSelectedcardIndex(index)}
  //               hover={true}
  //               isFaceUp={false}
  //             />
  //           ))}
  //         </div>
  //         <button
  //           className="comfirm_card"
  //           onClick={buttonHandler}
  //           style={{
  //             position: "relative",
  //             left: "80vw",
  //             top: "6vh",
  //             fontSize: "2rem",
  //             border: "1px solid black",
  //             borderRadius: "1rem",
  //           }}
  //         >
  //           確認出牌
  //         </button>
  //       </div>
  //       {ismoving && (
  //         <Card
  //           value={moveingCard}
  //           className="move_card"
  //           onAnimationEnd={animationEnd}
  //         />
  //       )}
  //     </div>
  //   );
};

export default GamePage;
