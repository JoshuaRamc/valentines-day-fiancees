// src/App.js
import React, { useState } from "react";
import "./App.css";

import Landing from "./components/Landing";
import NoScreen from "./components/NoScreen";
import YesGallery from "./components/YesGallery";

const SCREENS = {
  LANDING: "LANDING",
  NO: "NO",
  YES: "YES",
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING);

  return (
    <div className="screen">
      {screen === SCREENS.LANDING && (
        <Landing
          onYes={() => setScreen(SCREENS.YES)}
          onNo={() => setScreen(SCREENS.NO)}
        />
      )}

      {screen === SCREENS.NO && (
        <NoScreen onBack={() => setScreen(SCREENS.LANDING)} />
      )}

      {screen === SCREENS.YES && (
        <YesGallery onBack={() => setScreen(SCREENS.LANDING)} />
      )}
    </div>
  );
}
