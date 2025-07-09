import { Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react'

const Proyecto6Limpieza = () => {
  const [view, setView] = React.useState('TextoOriginal');
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Grid container>
      <Grid size={4}>
        <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        color="primary"
      >
          <ToggleButton value="TextoOriginal" aria-label="list">
            Texto original
          </ToggleButton>
          <ToggleButton value="ASCII" aria-label="module">
            Texto en formato ASCII
          </ToggleButton>
          <ToggleButton value="stopWords" aria-label="quilt">
            Texto con los stop words removidos 
          </ToggleButton>
          <ToggleButton value="ASCIIYStopWords" aria-label="quilt">
            Texto en formato ASCII y <br></br>con los stop words removidos
          </ToggleButton>
          <ToggleButton value="final" aria-label="quilt">
            Versión final, reemplazando <br></br>aquellas palabras que <br></br>generan ruido al modelo

          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid size={8}>
        <Paper sx={{height:"200px", textAlign:"center", alignContent:"center"}}>
          {view == "TextoOriginal"?<>
            <Typography variant='body1'>@jkhxgucci Las jikukas estamos en sequía �� https://t.co/EjdVanYO9l</Typography>
          </>:<></>}
          {view == "ASCII"?<>
            <Typography variant='body1'>@jkhxgucci Las jikukas estamos en sequia https://t.co/EjdVanYO9l</Typography>
          </>:<></>}
          {view == "stopWords"?<>
            <Typography variant='body1'>@jkhxgucci Las jikukas sequía �� https://t.co/EjdVanYO9l</Typography>
          </>:<></>}
          {view == "ASCIIYStopWords"?<>
            <Typography variant='body1'>@jkhxgucci Las jikukas sequia https://t.co/EjdVanYO9l</Typography>
          </>:<></>}
          {view == "final"?<>
            <Typography variant='body1'>user Las jikukas sequia link</Typography>
          </>:<></>}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Proyecto6Limpieza