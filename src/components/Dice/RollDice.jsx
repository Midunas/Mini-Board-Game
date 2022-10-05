import { Button } from '@mui/material';
import SingleDice from '../Dice/SingleDice'
import MainContext from '../../context/MainContext';
import React, { useContext, useState } from 'react';

const RollDice = () => {

  const { setPlayerPosition, playerPosition } = useContext(MainContext)
  const [nums, setNums] = useState([1, 1])

  const updatePlayerPosition = (diceSum) => {
    if (playerPosition + diceSum > 28) {
      setPlayerPosition(playerPosition + diceSum - 28)
    } else {
      setPlayerPosition(playerPosition + diceSum)
    }
  }

  const rollDice = () => {
    const rnd = () => Math.ceil(Math.random() * 6)
    const result = [rnd(), rnd()]
    setNums(result)

    updatePlayerPosition(result[0] + result[1])
  }


  return (
    <div className='dice-box'>
      <SingleDice num={nums[0]} />
      <SingleDice num={nums[1]} />

      <br />
      <br />
      <Button variant='contained' onClick={rollDice} id='roll-dice' >Roll Dice</Button>
    </div >
  );
};

export default RollDice;

