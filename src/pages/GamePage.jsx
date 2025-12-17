import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import HPBar from "../components/HPBar";
import "../style/game.css";

//mock api
import {
  apiInitGame,
  apiSubmitBattleCard,
  apiResolveBattle,
} from "../api/gameAPI.jsx";

export default function GamePage({ setWin }) {
  let ngv = useNavigate();
  // choosing -> 自己選牌的時間
  // waiting -> 若對方的牌還沒來要等
  // calculating -> 等待後端計算的時間
  let [gameInfo, setGameInfo] = useState(null);
  let [gameState, setGameState] = useState("choosing");
  let [selectedIndex, setSelectedIndex] = useState(null);
  let [myBattleCard, setMyBattleCard] = useState(null); //ex:"1J" (value suit)

  //初始化資料
  useEffect(() => {
    // await 只能用在 async funtion 裡
    async function init() {
      const data = await apiInitGame();
      setGameInfo(data);
    }
    init();
  }, []);

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  //當hp結算時，要先進行animation, 再將state->choosing
  useEffect(() => {
    if (!gameInfo || !gameInfo.my_hp_change) return;

    const t = setTimeout(() => {
      setGameInfo((prev) => ({
        ...prev,
        oppenent_battle_card: null,
        hp_count: [null, null],
      }));
      setMyBattleCard(null);
      setGameState("choosing");
    }, 3000);

    return () => clearTimeout(t);
  }, [gameInfo?.my_hp_change]);

  //當有winner時，也要先進行animation，再結束遊戲
  useEffect(() => {
    if (!gameInfo || !gameInfo.win) return;
    const t = setTimeout(() => {
      setWin(gameInfo.win);
      ngv("/end");
    }, 3000);
  }, [gameInfo?.win]);

  let confirmHandler = async () => {
    // 不能submit的情況
    if (selectedIndex == null) {
      alert("choose one card!");
      return;
    } else if (gameState !== "choosing") {
      alert("現在不能選");
      setSelectedIndex(null);
      return;
    }

    // 設定battleCard, 清除selectedIndex, 更新hand card
    const bat_card = gameInfo.my_info.hand[selectedIndex];
    setMyBattleCard(bat_card);
    setSelectedIndex(null);
    setGameInfo((prev) => ({
      ...prev,
      my_info: {
        ...prev.my_info,
        hand: prev.my_info.hand.filter((_, i) => i !== selectedIndex),
      },
    }));

    //------Submit BattleCard---------
    //送出自己的battleCard, 並等對方的battleCard
    setGameState("waiting");
    const op_battleCard = await apiSubmitBattleCard(bat_card);
    // 看到對方的卡牌後，更新info,並等待後端計算完hp
    setGameInfo((prev) => ({
      ...prev,
      oppenent_info: {
        ...prev.oppenent_info,
        hand: prev.oppenent_info.hand.filter((e, i) => e !== op_battleCard),
      },
      oppenent_battle_card: op_battleCard,
    }));

    //------Calculate Battle Result---------
    setGameState("calculating");
    const result = await apiResolveBattle();
    //先更新hp資料，讓hp animation 跑完，再清除 battleCard
    setGameInfo((prev) => ({
      ...prev,
      my_info: {
        ...prev.my_info,
        HP: result.my_hp,
        hand: result.my_hand,
      },
      oppenent_info: {
        ...prev.oppenent_info,
        HP: result.op_hp,
        hand: result.op_hand,
      },
      // oppenent_battle_card: null,
      hp_count: [result.my_hp_change, result.op_hp_change],
      win: result.win,
    }));
  };

  if (!gameInfo) return null;
  return (
    <div className="game-board">
      {/* Top Area : opponent */}
      <div className="opponent-area">
        {/* 頭像+名字＋hp */}
        <div className="player-info">
          <div className="head-circle">
            <div className="head-op"></div>
          </div>
          <div className="name">{gameInfo.oppenent_info.name}</div>
          <div className="hp-area">
            <HPBar hp={gameInfo.oppenent_info.HP} />
            {/* 戰鬥後的hp加減值 */}
            <div key={Date.now()} className="hp-info hp-change">
              {gameInfo.hp_count[1]}
            </div>
          </div>
        </div>
        {/* opponent card */}
        <div className="card-row">
          {gameInfo.oppenent_info.hand.map((c, i) => {
            return <Card key={i} value={c[0]} suit={c[1]} faceDown />;
          })}
        </div>
      </div>

      {/* Middle Area: duel */}
      <div className="battle-area">
        <div className="battle-circle left">
          <div className="battle-card">
            {gameInfo.oppenent_battle_card && (
              <Card
                value={gameInfo.oppenent_battle_card[0]}
                suit={gameInfo.oppenent_battle_card[1]}
              />
            )}
          </div>
        </div>
        <div className="card-deck">
          <div className="battle-card">
            <Card faceDown />
          </div>
          <div className="Deck-info">
            <span>Deck :</span>
            <span>{gameInfo.deck}</span>
          </div>
        </div>

        <div className="battle-circle right">
          <div className="battle-card">
            {myBattleCard ? (
              <Card value={myBattleCard[0]} suit={myBattleCard[1]} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Botton area : me */}
      <div className="player-area">
        {/* 頭像+名字＋hp */}
        <div className="player-info">
          <div className="head-circle">
            <div className="head-me"></div>
          </div>
          <div className="name">{gameInfo.my_info.name}</div>
          <div className="hp-area">
            <HPBar hp={gameInfo.my_info.HP} />
            <div key={Date.now()} className="hp-info hp-change">
              {gameInfo.hp_count[0]}
            </div>
          </div>
        </div>
        {/* 從後端取得的手排資料 */}
        <div className="card-row">
          {gameInfo.my_info.hand.map((c, i) => {
            return (
              <Card
                key={i}
                value={c[0]}
                suit={c[1]}
                selected={i === selectedIndex}
                onClick={() => {
                  setSelectedIndex(i);
                }}
                hover={true}
              />
            );
          })}
        </div>
      </div>

      {/* submit card button */}
      <button
        type="button"
        className="btn-confirm"
        onClick={() => {
          confirmHandler();
        }}
      >
        確認出牌
      </button>
    </div>
  );
}
