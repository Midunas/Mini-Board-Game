import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import GameSquare from "./GameSquare";
import EmptySquare from './EmptySquare';
const GameMap = () => {

  const {
    gameMap,
  } = useContext(MainContext)

  return (
    <div className="board">
      {gameMap.map((x, i) => {
        if (x > 0) {
          return (<GameSquare item={x} key={i} />)
        } else {
          return <EmptySquare key={i}></EmptySquare>
        }
      })}
    </div>
  );
};

export default GameMap;
