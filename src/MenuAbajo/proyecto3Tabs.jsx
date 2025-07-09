import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import presenciaRegiones from '../Imagenes/googleNewsPresenciaPorRegion.png'
import presenciaMedioComunicacion from '../Imagenes/googleNewsPrecenciaMedioComunicacion.png'
import presenciaPorAno from '../Imagenes/googleNewsPrecenciaPorAno.png'

export default function Proyecto3Tabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 980 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Primera parte" />
          <Tab label="Segunda parte" />
          <Tab label="Tercera parte" />
        </Tabs>
      </Box>

      {value == 0?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaRegiones}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Frecuencia de la noticia por región</Typography>
              <Typography variant='body1' p={6}>Acá aparece la frecuencia de cada región en la base de datos, con distintos colores dependiendo de la zona (verde para la zona norte, rojo para la zona centro y azul para la zona sur. Como se puede apreciar es la zona central la que recibe más noticias, siendo la región de Valparaíso la que protagoniza más artículos.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 1?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaMedioComunicacion}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Medios más frecuentes</Typography>
              <Typography variant='body1' p={6}>Como se puede ver en el gráfico hay mayor presencia de medios digitales con noticias, siendo “resumen.com” y “El Ciudadano” las más frecuentes, viniendo después un medio tradicional como es “La Tercera”.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 2?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaPorAno}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Fechas de las noticias</Typography>
              <Typography variant='body1' p={6}>Este gráfico muestra el aumento exponencial de noticias que tratan la temática de conflictos ambientales, hecho que se puede explicar por la creciente tensión que recibe esta temática, junto con la mayor extensión y uso de los medios digitales.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
