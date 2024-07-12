import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasketballPlayerCard from "./components/BasketballPlayerCard";

function App() {
  const player = {
    name: "LeBron James",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGrqspfbZcN_Fca9P-iVc91duLV-J678NCjRZKwYBK1QMSBOWkOuTYGLbpgZ1dQIIBhpAZ66NLc6xSDy8",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };
  return (
    <>
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </>
  );
}

export default App;
