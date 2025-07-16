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
      <Typography variant='h2' component="h1" p={2}>{lang == "es"?"Clasificación de texto asistida":"Assisted text classification"}</Typography>
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
      <Typography variant='body1' p={2}>{lang == "es"?"Creación de aplicación que asiste la clasificación de datos de tipo texto. Busqueda activa del programa de las instancias no clasificadas más informativas para el modelo.":"Creation of an application that assists in the classification of text data. The program actively searches for the most informative unclassified instances for the model."}</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Objetivo":"Objective"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Asistir al proceso de clasificación de datos por parte de humanos. Asistir la clasificación de bases de datos para evitar el problema de las bases de datos desbalanceadas (desigualdad en la base de datos provoca problemas para entrenar modelos clasificatorios).":"Assisting the human data classification process. Assisting database classification to avoid the problem of unbalanced databases (inequality in the database causes problems when training classification models)."}</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Metodología":"Methodology"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Implementación de estrategias para mejorar los datos seleccionados para ser clasificados (active learning) y metodologías para la generación artificial de casos (guided learning), implementados con diversos modelos clasificadores de texto (BERT, LLAMA y LSTM).":"Implementation of strategies to improve the data selected for classification (active learning) and methodologies for artificial case generation (guided learning), implemented with various text classifier models (BERT, LLAMA, and LSTM)."}
</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Tabla de resultados":"Results table"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"El gráfico de la izquierda muestra los resultados de la implementación de las estrategias de active learning. Mientras que el gráfico de la derecha muestra la tabla con los datos de cada base de datos, a través de esta tabla es posible cambiar los datos presentados por el gráfico de la izquierda, a la vez que el gráfico de la izquierda proporciona la posibilidad de cambiar la métrica por la cual el desempeño de la estrategia es presentada.":"The graph on the left shows the results of implementing active learning strategies. While the graph on the right shows the table with the data from each database, this table allows you to change the data presented in the graph on the left, while the graph on the left also allows you to change the metric by which the strategy's performance is presented."}</Typography>
      <Proyecto1Plot></Proyecto1Plot>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Explicación de las estrategias":"Explanation of the strategies"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"El active learning es una técnica que permite a un modelo seleccionar activamente qué datos son más informativos para que los etiqueten los humanos. En lugar de entrenar un modelo con un conjunto de datos completamente etiquetado desde el principio, el modelo aprende a identificar ejemplos más difíciles o más inciertos en sus predicciones, lo que minimiza el esfuerzo requerido.":"Active learning is a technique that allows a model to actively select which data is most informative for humans to label. Instead of training a model with a fully labeled dataset from the start, the model learns to identify more difficult or uncertain examples in its predictions, minimizing the effort required."}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"El guided learning, por otro lado, es una estrategia crucial, especialmente cuando se trata de categorías menos comunes o raras dentro de un conjunto de datos. En este enfoque, las entradas de texto se generan artificialmente, específicas para categorías que son menos representativas en el conjunto de datos. Este enfoque, si bien aumenta los costos de entrenamiento, es la única alternativa cuando es imposible acceder a las categorías minoritarias, lo que subraya su importancia.":"Guided learning, on the other hand, is a crucial strategy, especially when dealing with less common or rare categories within a dataset. In this approach, text inputs are artificially generated, specific to categories that are less representative in the dataset. This approach, while increasing training costs, is the only alternative when minority categories are impossible to access, which underscores its importance."}</Typography>
      <Proyecto1Slider></Proyecto1Slider>      

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"Base de datos del proyecto":"Project database"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Se utilizó MySQL para almacenar los datos del proyecto (modelos, métricas, bases de datos sin clasificar).":"MySQL was used to store project data (models, metrics, unsorted databases)."}</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={baseDeDatos}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>{lang == "es"?"Gráfico muestra el esquema de la base de datos.":"Chart shows the database schema."}</Typography>

      <Typography variant='h4' component={"h2"} p={2}>{lang == "es"?"El proceso de active learning":"The active learning process"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Existen 6 pasos para implementar el active learning en el etiquetado de datos.":"There are 6 steps to implementing active learning in data labeling."}</Typography>
      <Proyecto1ActiveLearning></Proyecto1ActiveLearning>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={activeLearning}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>{lang == "es"?"Gráfico muestra el proceso de active learning.":"Chart shows the active learning process."}</Typography>
      <Box></Box>
    </>
  )
}

export default Proyecto1