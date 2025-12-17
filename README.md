# Duel 25 – Frontend (Vite + React)

本專案為《決鬥 25（Duel 25）》線上雙人卡牌遊戲的**前端實作**，  
使用 **Vite + React** 建立 SPA（Single Page Application），  
並以「假 API（Mock API）」方式模擬後端資料流與遊戲狀態，  
用於前後端尚未串接完成前的畫面與互動開發。

---

## 專案簡介

《決鬥 25》是一款節奏快速、強調心理博弈的雙人卡牌遊戲。

本前端專案負責：

- 遊戲頁面與 UI 呈現
- 遊戲流程控制（選牌 → 確認 → 結算 → 結果頁）
- 狀態管理（HP、手牌、回合狀態）
- 與「模擬後端 API」互動（非真實後端）

> ⚠️ 本 repo **僅包含前端程式碼**  
> `src/api` 內為假資料與模擬 API，並非實際後端服務

---

## 使用技術

- **Vite** – 前端建構工具
- **React** – UI Framework
- **React Router** – 頁面切換
- **JavaScript (ES6+)**
- **CSS / RWD Layout**

---

## 專案啟動方式（Vite）

### 1. 安裝套件

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

### 3. 開啟瀏覽器

```text
http://localhost:5173
```

> 若 Port 被佔用，Vite 會自動使用其他 Port，請依終端機顯示為準

---

## 專案資料夾結構

```text
src/
├── api/
│   └── gameAPI.jsx        # 偽後端 API（Mock Data）
│
├── components/
│   ├── Card.jsx           # 卡牌元件
│   ├── HPBar.jsx          # HP 顯示條
│   └── ...                # 其他共用 UI 元件
│
├── pages/
│   ├── LandingPage.jsx    # 進入首頁
│   ├── GuestPage.jsx      # 玩家輸入暱稱
│   ├── GamePage.jsx       # 遊戲主畫面
│   ├── ResultPage.jsx     # 勝負結果頁
│   └── RulePage.jsx       # 遊戲規則說明
│
├── resource/
│   └── images / icons     # 圖片資源
│
├── style/
│   └── *.css              # 全域與頁面樣式
│
├── App.jsx                # Router 與頁面配置
├── main.jsx               # React 入口
```

---

## API 說明（Mock API）

### 位置

```text
src/api/gameAPI.jsx
```

### 說明

此檔案為**模擬後端 API**，用來：

- 偽造玩家資料
- 偽造遊戲狀態
- 模擬非同步請求（Promise / async）

⚠️ **並未實際連接任何 Server 或 Database**

---

### API 使用範例（概念）

```js
import { initGame, playCard } from "../api/gameAPI";

// 初始化遊戲
const gameData = await initGame();

// 玩家出牌
const result = await playCard({
  playerId: "P1",
  card: "KS",
});
```

---

### Mock API 回傳資料範例

```js
{
  my_info: {
    name: "Player A",
    HP: 25,
    Deck: 20,
    hand: ["KS", "5C", "3D", "JH", "3H"]
  },
  opponent_info: {
    name: "Player B",
    HP: 25,
    Deck: 20
  },
  game_state: "choosing"
}
```

---

## 專案狀態

- 前端頁面完成
- 遊戲流程與 UI 邏輯完成
- 使用 Mock API 模擬後端
- 尚未串接真實後端（AWS / AppSync / WebSocket）

---

## 作者 / 負責內容

- **Frontend Developer**

  - UI / UX 設計
  - React Component 開發
  - 遊戲畫面與流程控制
  - 偽 API 設計與串接

---

## 備註

- 本專案適合用於：

  - 前端展示
  - 課堂專案
  - 前後端分工展示（Frontend Only）

- 若未來串接真實後端，可直接替換 `src/api` 內容

```

```
