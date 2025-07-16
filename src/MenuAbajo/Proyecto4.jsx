import { Chip, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import taxi from '../Imagenes/taxi.png'
import Proyecto4Tabs from './Proyecto4Tabs'
import { LanguageContext, SetLanguageContext } from '../App'

const Proyecto4 = (props) => {
    const lang = useContext(LanguageContext)
    const setLang = useContext(SetLanguageContext)
    props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>{lang == "es"?"Predicción de la propinas a taxis en Nueva York":"Predicting Taxi Tips in New York"}</Typography>
      <Container>
        <Chip color='success' label={lang == "es"?"Análisis de datos":"Data analysis"} sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Matplotlib" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Scikit-learn" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={taxi}></img>
      </Container>
      <Typography variant='body1' p={2}>{lang == "es"?"Análisis de las propinas en los viajes de taxi en Nueva York, detección de factores que facilitan la obtención de mayores propinas.":"Analysis of tips for taxi rides in New York, identifying factors that facilitate obtaining higher tips."}</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Graficos y analisis de variables":"Graphics and analysis of variables"}</Typography>
      <Proyecto4Tabs></Proyecto4Tabs>


      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Conclusiones de la investigación":"Research conclusions"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Finalmente terminan 13 variables predictoras y una variable dicotómica por predecir. 7 de las variables predictoras son categóricas y el resto son numéricas.":"Finally, 13 predictor variables and one dichotomous variable remain to be predicted. Seven of the predictor variables are categorical, and the rest are numerical."}</Typography>
    </>
  )
}

export default Proyecto4