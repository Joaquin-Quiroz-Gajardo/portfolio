import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import cantidadArticulosPorAno from '../Imagenes/proyecto2CantidadArticulosPorAño.png'
import cantidadArticulosPorArea from '../Imagenes/proyecto2CantidadArticulosPorArea.png'
import cantidadArticulosPorOrientacionYAno from '../Imagenes/proyecto2CantidadArticulosOrientacionPorAño.png'
import cantidadArticulosPorOrientacionYArea from '../Imagenes/proyecto2CantidadArticulosPorOrientacionYAreaTematica.png'
import cantidadCitacionesPorPerspectiva from '../Imagenes/proyecto2CantidadCitacionesPorPerspectiva.png'

export default function Proyecto2Tabs() {
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
          <Tab label="Cuarta parte" />
          <Tab label="Quinta parte" />
        </Tabs>
      </Box>

      {value == 0?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={cantidadArticulosPorAno}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad artículos por año</Typography>
              <Typography variant='body1' p={6} >Al observar genéricamente el periodo entre 2010 y 2020 descubrimos un crecimiento sostenido en las publicaciones sobre relaves mineros. Esta tendencia se ve tensionada sólo durante el año 2015 en donde por 69 artículos no se superan las 717 publicaciones del año anterior, ahora bien, la cantidad de documentos sigue siendo superior a la cantidad de artículos anuales durante el periodo 2010 al 2013 y durante el año 2016 se retoma el crecimiento llegando a 782 documentos publicados. Cabe mencionar que luego de calcular la tasa de crecimiento de artículos sobre relaves durante el periodo 2010 y 2020 esta asciende a 9,28%, lo cuál, es superior al 4,41% registrado en la base general de Scopus. Aquello nos indica, que el crecimiento de artículos sobre relaves no es explicable en función del aumento de global de publicaciones, y que por tanto puede ser interpretado como significativo.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 1?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={cantidadArticulosPorArea}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad artículos por área</Typography>
              <Typography variant='body1' p={6}>La producción internacional sobre relaves se explica en su gran mayoría por lo que ocurre en 3 áreas disciplinares (gráfico 2). Estas son: i) Earth Sciences, ii) Environmental Sciences y iii) Engineering. El resto de las áreas disciplinares como Matemáticas, Agriculture, Química, Ingeniería, Ingeniería Química, Física y Ciencias Sociales aportan de manera estable pero en un número menor. Es importante señalar que en este análisis un mismo artículo puede formar parte de más de una disciplina. Situación que no descarta el hecho de que la interdisciplinariedad sea la forma de análisis más común en el estudio de los relaves mineros. </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 2?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={cantidadArticulosPorOrientacionYAno}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad artículos por orientación y año</Typography>
              <Typography variant='body1' p={6}>Tanto la perspectiva retrospectiva como prospectiva muestran un crecimiento para el período 2010-2020. Así, los artículos retrospectivos parten con 174 artículos, llegando a un máximo de publicación el año 2020 con 393. Por su parte los artículos prospectivos parten con 283 el año 2010, llegando a un máximo de 737 el 2019 y finalizando el período con 718 el año 2020. Esto representa una tasa de crecimiento de 8.48% para los artículos retrospectivos y 9.75% para los artículos de carácter prospectivo. El gráfico 3 muestra que durante la gran mayoría del período 2010-2020 la publicación de artículos prospectivos duplica a los retrospectivos. </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 3?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={cantidadArticulosPorOrientacionYArea}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad artículos por orientación y área</Typography>
              <Typography variant='body1' p={6}>El gráfico 4 nos permite observar el comportamiento de las diferentes disciplinas en términos de la publicación de artículos. Environmental Sciences, Agriculture and Social Sciences son las disciplinas que muestran un aporte similar en las investigaciones con perspectiva prospectivas y retrospectivas. Ahora bien, el resto de las disciplinas muestran un aporte mucho mayor a la perspectiva prospectiva, lo cual corrobora el hecho de que ninguna disciplina mantiene como centro de su interés a la investigación retrospectiva. A nivel del crecimiento de las publicaciones, se observa un aumento en la producción de investigaciones prospectivas en la gran mayoría de las disciplinas, salvo las tres excepciones antes señaladas.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 4?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={cantidadCitacionesPorPerspectiva}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad de citaciones por perspectiva</Typography>
              <Typography variant='body1' p={6}>En términos de impacto, los artículos retrospectivos tienen un  promedio de citas de 10.41 mientras que los prospectivos presentan 8.69 citaciones (ver información en gráfico 6). En este sentido, los artículos retrospectivos son más citados que los prospectivos. Ahora bien, los prospectivos son una mayor cantidad de artículos, concentrando más citas del total. Si observamos las medianas, es decir el 50% de la distribución, vemos que los artículos retrospectivos poseen 4 citas mientras que los prospectivos 2 citaciones, lo que significa que el impacto de los últimos -en esta parte de la distribución- es menor. Sin embargo, el artículo más citado de los prospectivos alcanza 352 citas, mientras que el mismo en los retrospectivos logra sólo 202 citas, lo que reflejaría un mayor impacto del 25% más citados de los artículos prospectivos.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
