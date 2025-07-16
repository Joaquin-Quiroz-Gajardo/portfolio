import { Chip, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import XEjemplo from '../Imagenes/XEjemplo.png'
import XEntregaDerechosPorRegion from '../Imagenes/XEntregaDerechosPorRegion.png'
import Proyecto6Limpieza from './Proyecto6Limpieza'
import XResultadoEntrenamiento from '../Imagenes/XResultadoEntrenamiento.png'
import { LanguageContext, SetLanguageContext } from '../App'

const Proyecto6 = (props) => {
    const lang = useContext(LanguageContext)
    const setLang = useContext(SetLanguageContext)
    props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>{lang == "es"?"Named entity recognition en X":"Named entity recognition on X"}</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Pytorch" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEjemplo}></img>
      </Container>
      <Typography variant='body1' p={2}>{lang == "es"?"Se detectaron y clasificaron las entidades nombradas dentro de una muestra de tuits que abordan el tema de la sequía en Chile. Esto, a través de un proceso conocido como Aspect Extraction. Lo que hace posible relevar el apoyo, la neutralidad o bien, el rechazo expresado en una opinión.":"The named entities were identified and classified within a sample of tweets addressing the topic of drought in Chile. This was done through a process known as Aspect Extraction. This makes it possible to identify the support, neutrality, or rejection expressed in an opinion."}</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Datos entrega de derechos de aguas":"Data on the delivery of water rights"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"El aumento de la regulación que incorporó la reforma del 2005 al código de aguas prometió una menor demanda y posesión especulativa de los derechos de agua mediante la formación de subastas de derechos y comisiones que sancionen el mantenimiento ocioso del agua. Sin embargo, el aumento de la sequía que experimenta Chile generó el efecto contrario. Las adjudicaciones de derechos aumentaron sin que hubiera un cambio respecto de la tendencia anterior (Herrera et al.2019).":"The increased regulation incorporated by the 2005 reform of the water code promised to reduce demand and speculative ownership of water rights through the establishment of rights auctions and commissions to penalize idle water maintenance. However, the increasing drought in Chile had the opposite effect. Rights allocations increased, with no change from the previous trend (Herrera et al. 2019)."}</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEntregaDerechosPorRegion}></img>
      </Container>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Extracción de datos y preprocesamiento":"Data extraction and preprocessing"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Los datos fueron recopilados a través de la API de twitter, teniendo como query de la busqueda la sequía, posteriormente los datos fueron procesados de la siguiente manera.":"The data was collected through the Twitter API, using drought as the search query. The data was then processed as follows."}</Typography>
      <Proyecto6Limpieza></Proyecto6Limpieza>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Resultados Named entity recognition con BETO":"Results Named entity recognition with BETO"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Por lo general el modelo logró un buen desempeño en la tarea de detección de aspecto, la mayoría de las categorías lograron un F1 Score por sobre el 0.9, pero resalta negativamente las categorías que no lograron una presencia suficiente en la base de datos con desempeños que no son tomados como confiables.":"The model generally performed well on the aspect detection task, with most categories achieving an F1 score above 0.9. However, the categories that did not achieve sufficient presence in the database were negatively highlighted, with performances that were not considered reliable."}</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XResultadoEntrenamiento}></img>
      </Container>
    </>
      
    
  )
}

export default Proyecto6