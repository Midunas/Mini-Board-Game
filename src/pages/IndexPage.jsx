import { useContext, useRef } from 'react';
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { Paper, Box, Typography, Button } from '@mui/material';
import ChooseCharacter from '../components/ChoseCharacter/ChooseCharacter';

const IndexPage = () => {
  const nav = useNavigate()
  const inpRef = useRef()

  const { setPlayerImage } = useContext(MainContext)

  function updatePhoto() {
    const photoValue = inpRef.current.value
    if (photoValue.length > 0) {
      setPlayerImage(photoValue)
      nav("/MiniBoardGame/game")
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', m: 'auto' }}>
      <Box sx={{ width: 500, height: 500, textAlign: 'center' }}>
        <Paper
          elevation={3}
          sx={{ height: '100%', m: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ pt: 4 }}>Welcome!</Typography>
          <Box sx={{ mt: 20 }}>
            <input className='playerInput' ref={inpRef} type="text" placeholder="player image url" />
            <Button variant="contained" onClick={updatePhoto} sx={{ width: '60%', mx: 'auto' }}>Start The Game!</Button>
          </Box>
        </Paper >
      </Box>
      <ChooseCharacter></ChooseCharacter>
    </Box>
  );
};

export default IndexPage;