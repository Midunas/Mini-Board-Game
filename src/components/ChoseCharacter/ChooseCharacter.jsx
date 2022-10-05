import React from 'react'
import { Paper, Box, Typography, Link } from '@mui/material';
import CharacterDisplay from './CharacterDisplay';

const ChooseCharacter = () => {
  return (

    <Paper sx={{ width: '800px', height: '400px', mt: '50px', ml: '-130px', textAlign: 'center' }}>
      <Typography variant="h4" >Choose Your Character!</Typography>
      <CharacterDisplay />
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Or Find Your Own!</Typography>
        <Box sx={{ fontSize: '40px', mt: 4 }}>
          <Link href="https://www.google.com/" sx={{ textDecoration: 'none' }}>Google</Link>
        </Box>
      </Box>
    </Paper>
  )
}

export default ChooseCharacter;