import GameBoard from "../components/GameBoard/GameBoard";
import RollDice from "../components/Dice/RollDice";
import { Box } from "@mui/material";

const GamePage = () => {

  return (
    <Box sx={{ m: 'auto' }}>
      <GameBoard />
      <RollDice />
    </Box>
  );
};

export default GamePage;