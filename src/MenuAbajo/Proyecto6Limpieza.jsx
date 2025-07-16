import { Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { LanguageContext } from '../App';

const Proyecto6Limpieza = () => {
  const lang = useContext(LanguageContext)
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
            {lang == "es"?"Texto original":"Original text"}
          </ToggleButton>
          <ToggleButton value="ASCII" aria-label="module">
            {lang == "es"?"Texto en formato ASCII":"Text in ASCII format"}
          </ToggleButton>
          <ToggleButton value="stopWords" aria-label="quilt">
            {lang == "es"?"Texto con los stop words removidos":"Text with stop words removed"} 
          </ToggleButton>
          <ToggleButton value="ASCIIYStopWords" aria-label="quilt">
            {lang == "es"?"Texto en formato ASCII y":"Text in ASCII format and"} <br></br>{lang == "es"?"con los stop words removidos":"with stop words removed"}
          </ToggleButton>
          <ToggleButton value="final" aria-label="quilt">
            {lang == "es"?"Versión final, reemplazando":"Final version, replacing"} <br></br>{lang == "es"?"aquellas palabras que":"those words that"} <br></br>{lang == "es"?"generan ruido al modelo":"generate noise to the model"}

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