import GameBoard from "../components/GameBoard/GameBoard";
import RollDice from "../components/Dice/RollDice";
import { Box } from "@mui/material";

const GamePage = () => {

  return (
    <Box sx={{ m: 'auto' }}>
      <div className="d-flex">
        <GameBoard />
        <RollDice />
      </div>
    </Box>
  );
};

export default GamePage;