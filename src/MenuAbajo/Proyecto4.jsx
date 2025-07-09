import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import taxi from '../Imagenes/taxi.png'
import Proyecto4Tabs from './Proyecto4Tabs'

const Proyecto4 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Predicción de la propinas a taxis en Nueva York</Typography>
      <Container>
        <Chip color='success' label="Análisis de datos" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Matplotlib" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Scikit-learn" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={taxi}></img>
      </Container>
      <Typography variant='body1' p={2}>Análisis de las propinas en los viajes de taxi en Nueva York, detección de factores que facilitan la obtención de mayores propinas.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Graficos y analisis de variables</Typography>
      <Proyecto4Tabs></Proyecto4Tabs>


      <Typography variant='h4' component={"h2"} p={2}>Conclusiones de la investigación</Typography>
      <Typography variant='body1' p={2}>Finalmente terminan 13 variables predictoras y una variable dicotómica por predecir. 7 de las variables predictoras son categóricas y el resto son numéricas.</Typography>
    </>
  )
}

export default Proyecto4