import { Chip, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import relaves from '../Imagenes/Relaves.png'
import Proyecto2Tabs from './Proyecto2Tabs'
import { LanguageContext, SetLanguageContext } from '../App'

const Proyecto2 = (props) => {
    const lang = useContext(LanguageContext)
    const setLang = useContext(SetLanguageContext)
    props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Clasificador de datos académicos y web scraping</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Excel" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="BERT" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Tensor flow" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Web scraping" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={relaves}></img>
      </Container>
      <Typography variant='body1' p={2}>Extracción de datos, papers académicos que tratan la temática de los relaves mineros. Además se desarrolló un clasificador de texto, para clasificar los artículos en dos categorías (retrospectivo, prospectivo).</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Extracción de datos y clasificador</Typography>
      <Typography variant='body1' p={2}>Se recopilaron artículos académicos de la biblioteca de Scopus considerando que es la más extensa del mundo. Se realizó la búsqueda de artículos con las palabras “handling”, "handling dewatering" y "mine tailings" durante el período comprendido entre los años 2010 y 2020. Fruto de este proceso se descargaron 15.153 registros de publicaciones las que fueron sometidas a revisión. Con un primer grupo de 50 artículos elegidos aleatoriamente, se advirtió la necesidad de efectuar una limpieza de la base de datos debido a que la palabra “tail” en ocasiones incorporaba artículos vinculados a otros campos de estudios, como por ejemplo, discusiones estadísticas y matemáticas. En efecto, se estableció como condición para la incorporación de artículos en la base de datos, que ellos contuvieran las palabras “mine”, “minera”' o “ore”, y también “dam”, “dike”, “dyke”, “shadow” o “tail” refiriendo a tailing. Como consecuencia, los casos que no tuvieran algunos de los “tokens” antes mencionados fueron excluidos, la base de datos quedó compuesta de 8.434 artículos.</Typography>
      <Typography variant='body1' p={2} pt={1}>Para la extracción de datos se utilizó la biblioteca beautiful soap, la cual permitió recopilar información adicional de los artículos (área de estudio). Además se utilizó el modelo BERT para la clasificación de artículos, en las categorías de prospectivo y retrospectivo. Con una muestra de 187 artículos se logró un F1 Score de 0.927 y un accuracy de 0.93.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Análisis de resultados</Typography>
      <Proyecto2Tabs></Proyecto2Tabs>
    </>
  )
}

export default Proyecto2