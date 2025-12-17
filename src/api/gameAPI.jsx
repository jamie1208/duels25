// 假的API 資料

// matching
// 傳user name 進行配對, return true/false
export async function apiMatching(name) {
  //name: "Bob"
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      resolve(success);
    }, 2000);
  });
}

// initialize
export async function apiInitGame() {
  return Promise.resolve({
    my_info: {
      name: "Jamie",
      HP: 10,
      hand: ["KS", "5C", "3D", "JH", "3H"],
    },
    oppenent_info: {
      name: "Henry",
      HP: 24,
      hand: ["QC", "4D", "3C", "AC", "7H"],
    },
    oppenent_battle_card: null, //ex:"5C"
    deck: 10, //排堆剩餘數
    win: null,
    hp_count: [null, null], //結算後的hp變化 ex:[my_hp_count,op_hp_count]
  });
}

// opponent send battle card
// 傳my battle card, return opponent battle card
export async function apiSubmitBattleCard(card) {
  // card: "KS"

  //先假定3秒回傳
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("QC");
    }, 3000);
  });
}

// resolve battle
export async function apiResolveBattle() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        my_hp: 15,
        op_hp: 20,
        my_hand: ["KS", "5C", "3D", "JH", "4H"],
        op_hand: ["4D", "4C", "AC", "7H"],
        my_hp_change: "-5",
        op_hp_change: "+10",
        win: 1, // null | 0 | 1
      });
    }, 2000);
  });
}
