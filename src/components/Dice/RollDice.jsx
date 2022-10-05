import { Button } from '@mui/material';
import SingleDice from '../Dice/SingleDice'
import MainContext from '../../context/MainContext';
import React, { useContext, useState } from 'react';
import { Box } from '@mui/system';

const RollDice = () => {

  const { setPlayerPosition, playerPosition } = useContext(MainContext)
  const [numbers, setNumbers] = useState([1, 1])

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
    setNumbers(result)

    updatePlayerPosition(result[0] + result[1])
  }


  return (
    <Box sx={{ ml: 45, mt: -4 }}>
      <div className='dice-box'>
        <SingleDice num={numbers[0]} />
        <SingleDice num={numbers[1]} />
        <br />
        <br />
        <Button variant='contained' onClick={rollDice} id='roll-dice' >Roll Dice</Button>
      </div >
    </Box>
  );
};

export default RollDice;

