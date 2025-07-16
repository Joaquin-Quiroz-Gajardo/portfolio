import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import presenciaRegiones from '../Imagenes/googleNewsPresenciaPorRegion.png'
import presenciaMedioComunicacion from '../Imagenes/googleNewsPrecenciaMedioComunicacion.png'
import presenciaPorAno from '../Imagenes/googleNewsPrecenciaPorAno.png'
import { LanguageContext } from '../App';

export default function Proyecto3Tabs() {
  const lang = React.useContext(LanguageContext)
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
          <Tab label={lang == "es"?"Primera parte":"Part one"} />
          <Tab label={lang == "es"?"Segunda parte":"Part two"} />
          <Tab label={lang == "es"?"Tercera parte":"Part three"} />
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Frecuencia de la noticia por región":"Frequency of news by region"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Acá aparece la frecuencia de cada región en la base de datos, con distintos colores dependiendo de la zona (verde para la zona norte, rojo para la zona centro y azul para la zona sur. Como se puede apreciar es la zona central la que recibe más noticias, siendo la región de Valparaíso la que protagoniza más artículos.":"Here you can see the frequency of each region in the database, with different colors depending on the region (green for the north, red for the central, and blue for the south). As you can see, the central region receives the most news, with the Valparaíso region featuring the most articles."}</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Medios más frecuentes":"Most frequent media"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Como se puede ver en el gráfico hay mayor presencia de medios digitales con noticias, siendo “resumen.com” y “El Ciudadano” las más frecuentes, viniendo después un medio tradicional como es “La Tercera”.":"As can be seen in the graph, there is a greater presence of digital media with news, being “resumen.com” and “El Ciudadano” the most frequent, coming later a traditional medium such as “La Tercera”."}</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Fechas de las noticias":"News dates"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Este gráfico muestra el aumento exponencial de noticias que tratan la temática de conflictos ambientales, hecho que se puede explicar por la creciente tensión que recibe esta temática, junto con la mayor extensión y uso de los medios digitales.":"This graph shows the exponential increase in news stories dealing with environmental conflicts, a fact that can be explained by the growing tension surrounding this topic, along with the increased reach and use of digital media."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
