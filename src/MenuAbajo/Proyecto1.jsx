import React, { useContext } from 'react'
import Proyecto1Slider from './Proyecto1Slider'
import Proyecto1Plot from './Proyecto1Plot'
import { Box, Chip, Container, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import baseDeDatos from "../Imagenes/mysql-squeme.png"
import activeLearning from "../Imagenes/active learning process.png"
import Proyecto1ActiveLearning from './Proyecto1ActiveLearning';
import videoAppReact from '../Imagenes/aplicacionReactActiveLearning.gif'
import { LanguageContext, SetLanguageContext } from '../App';


const Proyecto1 = (props) => {
    const lang = useContext(LanguageContext)
    const setLang = useContext(SetLanguageContext)
    props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Clasificación de texto asistida</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="MySQL" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="React" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Tensor flow" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={videoAppReact}></img>
      </Container>
      <Typography variant='body1' p={2}>Creación de aplicación que asiste la clasificación de datos de tipo texto. Busqueda activa del programa de las instancias no clasificadas más informativas para el modelo.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Objetivo</Typography>
      <Typography variant='body1' p={2}>Asistir al proceso de clasificación de datos por parte de humanos. Asistir la clasificación de bases de datos para evitar el problema de las bases de datos desbalanceadas (desigualdad en la base de datos provoca problemas para entrenar modelos clasificatorios).</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Metodología</Typography>
      <Typography variant='body1' p={2}>Implementación de estrategias para mejorar los datos seleccionados para ser clasificados (active learning) y metodologías para la generación artificial de casos (guided learning), implementados con diversos modelos clasificadores de texto (BERT, LLAMA
 y LSTM).
</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Tabla de resultados</Typography>
      <Typography variant='body1' p={2}>El gráfico de la izquierda muestra los resultados de la implementación de las estrategias de active learning. Mientras que el gráfico de la derecha muestra la tabla con los datos de cada base de datos, a través de esta tabla es posible cambiar los datos presentados por el gráfico de la izquierda, a la vez que el gráfico de la izquierda proporciona la posibilidad de cambiar la métrica por la cual el desempeño de la estrategia es presentada.</Typography>
      <Proyecto1Plot></Proyecto1Plot>

      <Typography variant='h4' component={"h2"} p={2}>Explicación de las estrategias</Typography>
      <Typography variant='body1' p={2}>El active learning es una técnica que permite a un modelo seleccionar activamente qué datos son más informativos para que los etiqueten los humanos. En lugar de entrenar un modelo con un conjunto de datos completamente etiquetado desde el principio, el modelo aprende a identificar ejemplos más difíciles o más inciertos en sus predicciones, lo que minimiza el esfuerzo requerido.</Typography>
      <Typography variant='body1' p={2}>El guided learning, por otro lado, es una estrategia crucial, especialmente cuando se trata de categorías menos comunes o raras dentro de un conjunto de datos. En este enfoque, las entradas de texto se generan artificialmente, específicas para categorías que son menos representativas en el conjunto de datos. Este enfoque, si bien aumenta los costos de entrenamiento, es la única alternativa cuando es imposible acceder a las categorías minoritarias, lo que subraya su importancia.</Typography>
      <Proyecto1Slider></Proyecto1Slider>      

      <Typography variant='h4' component={"h2"} p={2}>Base de datos del proyecto</Typography>
      <Typography variant='body1' p={2}>Se utilizó MySQL para almacenar los datos del proyecto (modelos, métricas, bases de datos sin clasificar).</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={baseDeDatos}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>Gráfico muestra el esquema de la base de datos.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>El proceso de active learning</Typography>
      <Typography variant='body1' p={2}>Existen 6 pasos para implementar el active learning en el etiquetado de datos.</Typography>
      <Proyecto1ActiveLearning></Proyecto1ActiveLearning>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={activeLearning}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>Gráfico muestra el proceso de active learning.</Typography>
      <Box></Box>
    </>
  )
}

export default Proyecto1