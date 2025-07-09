import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import XEjemplo from '../Imagenes/XEjemplo.png'
import XEntregaDerechosPorRegion from '../Imagenes/XEntregaDerechosPorRegion.png'
import Proyecto6Limpieza from './Proyecto6Limpieza'
import XResultadoEntrenamiento from '../Imagenes/XResultadoEntrenamiento.png'

const Proyecto6 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Reconocimiento de ojos por coordenada</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Pytorch" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEjemplo}></img>
      </Container>
      <Typography variant='body1' p={2}>Se detectaron y clasificaron las entidades nombradas dentro de una muestra de tuits que abordan el tema de la sequía en Chile. Esto, a través de un proceso conocido como Aspect Extraction. Lo que hace posible relevar el apoyo, la neutralidad o bien, el rechazo expresado en una opinión.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Datos entrega de derechos de aguas</Typography>
      <Typography variant='body1' p={2}>El aumento de la regulación que incorporó la reforma del 2005 al código de aguas prometió una menor demanda y posesión especulativa de los derechos de agua mediante la formación de subastas de derechos y comisiones que sancionen el mantenimiento ocioso del agua. Sin embargo, el aumento de la sequía que experimenta Chile generó el efecto contrario. Las adjudicaciones de derechos aumentaron sin que hubiera un cambio respecto de la tendencia anterior (Herrera et al.2019).</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEntregaDerechosPorRegion}></img>
      </Container>

      <Typography variant='h4' component={"h2"} p={2}>Extracción de datos y preprocesamiento</Typography>
      <Typography variant='body1' p={2}>Los datos fueron recopilados a través de la API de twitter, teniendo como query de la busqueda la sequía, posteriormente los datos fueron procesados de la siguiente manera.</Typography>
      <Proyecto6Limpieza></Proyecto6Limpieza>

      <Typography variant='h4' component={"h2"} p={2}>Resultados Named entity recognition con BETO</Typography>
      <Typography variant='body1' p={2}>Por lo general el modelo logró un buen desempeño en la tarea de detección de aspecto, la mayoría de las categorías lograron un F1 Score por sobre el 0.9, pero resalta negativamente las categorías que no lograron una presencia suficiente en la base de datos con desempeños que no son tomados como confiables.</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XResultadoEntrenamiento}></img>
      </Container>
    </>
      
    
  )
}

export default Proyecto6