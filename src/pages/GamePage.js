import GameBoard from "../components/GameBoard/GameBoard";
import RollDice from "../components/Dice/RollDice";

const GamePage = () => {

  return (
    <div className="d-flex">
      <GameBoard />
      <RollDice />
    </div>
  );
};

export default GamePage;