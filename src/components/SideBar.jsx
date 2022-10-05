import React from 'react'
import { Button } from '@mui/material';

const SideBar = ({ startGame, setColor, color }) => {


  return (
    <div >
      <div>
        <h1>Choose ur character</h1>
        <br />
        <br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <input className='color-picker' type="color" value={color} onChange={e => setColor(e.target.value)} />
          <Button variant='contained' color='success' onClick={startGame} >Start</Button>
        </div>
      </div>
    </div >
  )
}

export default SideBar;