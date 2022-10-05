import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

const GameSquare = ({ item }) => {

  const {
    playerPosition,
    playerImage
  } = useContext(MainContext)

  const classes = item ? "box border" : "empty box"

  return (
    <div className={classes}>
      {playerPosition === item && <img className="playerImg" src={playerImage} alt="" />}
    </div>
  );
};

export default GameSquare;