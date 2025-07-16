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
import { LanguageContext } from '../App';

export default function Proyecto2Tabs() {
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
          <Tab label={lang == "es"?"Cuarta parte":"Part four"} />
          <Tab label={lang == "es"?"Quinta parte":"Part five"} />
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad artículos por año":"Number of items per year"}</Typography>
              <Typography variant='body1' p={6} >{lang == "es"?"Al observar genéricamente el periodo entre 2010 y 2020 descubrimos un crecimiento sostenido en las publicaciones sobre relaves mineros. Esta tendencia se ve tensionada sólo durante el año 2015 en donde por 69 artículos no se superan las 717 publicaciones del año anterior, ahora bien, la cantidad de documentos sigue siendo superior a la cantidad de artículos anuales durante el periodo 2010 al 2013 y durante el año 2016 se retoma el crecimiento llegando a 782 documentos publicados. Cabe mencionar que luego de calcular la tasa de crecimiento de artículos sobre relaves durante el periodo 2010 y 2020 esta asciende a 9,28%, lo cuál, es superior al 4,41% registrado en la base general de Scopus. Aquello nos indica, que el crecimiento de artículos sobre relaves no es explicable en función del aumento de global de publicaciones, y que por tanto puede ser interpretado como significativo.":"Looking at the period between 2010 and 2020, we find sustained growth in publications on mine tailings. This trend only slowed in 2015, when 69 articles did not surpass the 717 publications of the previous year. However, the number of documents remains higher than the annual number of articles during the period from 2010 to 2013, and growth resumed in 2016, reaching 782 published documents. It is worth mentioning that after calculating the growth rate of articles on tailings during the period 2010 and 2020, it amounts to 9.28%, which is higher than the 4.41% recorded in the general Scopus database. This indicates that the growth in articles on tailings cannot be explained by the overall increase in publications and can therefore be interpreted as significant."}</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad artículos por área":"Number of items per area"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"La producción internacional sobre relaves se explica en su gran mayoría por lo que ocurre en 3 áreas disciplinares (gráfico 2). Estas son: i) Earth Sciences, ii) Environmental Sciences y iii) Engineering. El resto de las áreas disciplinares como Matemáticas, Agriculture, Química, Ingeniería, Ingeniería Química, Física y Ciencias Sociales aportan de manera estable pero en un número menor. Es importante señalar que en este análisis un mismo artículo puede formar parte de más de una disciplina. Situación que no descarta el hecho de que la interdisciplinariedad sea la forma de análisis más común en el estudio de los relaves mineros.":"The vast majority of international production on tailings is explained by what occurs in three disciplinary areas (Figure 2). These are: i) Earth Sciences, ii) Environmental Sciences, and iii) Engineering. The remaining disciplinary areas, such as Mathematics, Agriculture, Chemistry, Engineering, Chemical Engineering, Physics, and Social Sciences, contribute steadily but in smaller numbers. It is important to note that in this analysis, a single article may be part of more than one discipline. This situation does not rule out the fact that interdisciplinarity is the most common form of analysis in the study of mine tailings."} </Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad artículos por orientación y año":"Number of items by orientation and year"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Tanto la perspectiva retrospectiva como prospectiva muestran un crecimiento para el período 2010-2020. Así, los artículos retrospectivos parten con 174 artículos, llegando a un máximo de publicación el año 2020 con 393. Por su parte los artículos prospectivos parten con 283 el año 2010, llegando a un máximo de 737 el 2019 y finalizando el período con 718 el año 2020. Esto representa una tasa de crecimiento de 8.48% para los artículos retrospectivos y 9.75% para los artículos de carácter prospectivo. El gráfico 3 muestra que durante la gran mayoría del período 2010-2020 la publicación de artículos prospectivos duplica a los retrospectivos.":"Both the retrospective and prospective perspectives show growth for the 2010-2020 period. Thus, retrospective articles began with 174 articles, reaching a peak of 393 in 2020. Prospective articles began with 283 in 2010, reaching a peak of 737 in 2019, and ending the period with 718 in 2020. This represents a growth rate of 8.48% for retrospective articles and 9.75% for prospective articles. Figure 3 shows that for the vast majority of the 2010-2020 period, the number of prospective articles published doubled that of retrospective articles."} </Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad artículos por orientación y área":"Number of items by orientation and area"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"El gráfico 4 nos permite observar el comportamiento de las diferentes disciplinas en términos de la publicación de artículos. Environmental Sciences, Agriculture and Social Sciences son las disciplinas que muestran un aporte similar en las investigaciones con perspectiva prospectivas y retrospectivas. Ahora bien, el resto de las disciplinas muestran un aporte mucho mayor a la perspectiva prospectiva, lo cual corrobora el hecho de que ninguna disciplina mantiene como centro de su interés a la investigación retrospectiva. A nivel del crecimiento de las publicaciones, se observa un aumento en la producción de investigaciones prospectivas en la gran mayoría de las disciplinas, salvo las tres excepciones antes señaladas.":"Chart 4 shows the behavior of the different disciplines in terms of article publications. Environmental Sciences, Agriculture, and Social Sciences are the disciplines that show a similar contribution in research with a prospective and retrospective perspective. However, the remaining disciplines show a much greater contribution to the prospective perspective, which corroborates the fact that no discipline maintains retrospective research as its focus. In terms of publication growth, an increase in the production of prospective research is observed in the vast majority of disciplines, with the three exceptions noted above."}</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad de citaciones por perspectiva":"Number of citations per perspective"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"En términos de impacto, los artículos retrospectivos tienen un  promedio de citas de 10.41 mientras que los prospectivos presentan 8.69 citaciones (ver información en gráfico 6). En este sentido, los artículos retrospectivos son más citados que los prospectivos. Ahora bien, los prospectivos son una mayor cantidad de artículos, concentrando más citas del total. Si observamos las medianas, es decir el 50% de la distribución, vemos que los artículos retrospectivos poseen 4 citas mientras que los prospectivos 2 citaciones, lo que significa que el impacto de los últimos -en esta parte de la distribución- es menor. Sin embargo, el artículo más citado de los prospectivos alcanza 352 citas, mientras que el mismo en los retrospectivos logra sólo 202 citas, lo que reflejaría un mayor impacto del 25% más citados de los artículos prospectivos.":"In terms of impact, retrospective articles have an average of 10.41 citations, while prospective articles have 8.69 citations (see information in Figure 6). In this sense, retrospective articles are cited more than prospective ones. However, prospective articles comprise a larger number of articles, accounting for more citations of the total. If we look at the medians, that is, the 50% of the distribution, we see that retrospective articles have 4 citations, while prospective articles have 2 citations, which means that the impact of the latter—in this part of the distribution—is lower. However, the most cited article among the prospective articles reaches 352 citations, while the same article among the retrospective articles achieves only 202 citations, which would reflect a greater impact of the most cited 25% of prospective articles."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
