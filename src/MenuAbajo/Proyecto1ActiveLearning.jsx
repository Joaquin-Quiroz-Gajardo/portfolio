import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Proyecto1ActiveLearning = () => {
  const paso1 = "El primer paso es la clasificación aleatoria, que implica seleccionar aleatoriamente casos de la base de datos para ser clasificados. Como no hay un modelo entrenado, no hay una metodología para optimizar la selección de datos en esta etapa."
  const paso2 = "El segundo paso consiste en entrenar el modelo. Generalmente, cuando se realiza el primer paso, la porción de datos obtenida es menor a la que finalmente estará disponible, por lo que es común un desempeño deficiente en la clasificación de datos durante esta etapa."
  const paso3 = "El tercer paso consiste en la query strategy. Esta estrategia selecciona las instancias más informativas dentro de la base de datos sin clasificar. Este paso debe estar aislado de los anteriores, ya que permite modificar la estrategia de consulta, mientras que el resto del código de la API permanece intacto. También es importante recordar que existe la query strategy dependency, que es un problema en el que el éxito del proceso de active learning depende en gran medida de la query strategy seleccionada. Por lo tanto, es importante poder modificar esta estrategia fácilmente."
  const paso4 = "El cuarto paso es la clasificación de los datos seleccionados en la etapa anterior. Esta etapa presenta dos retos específicos. En primer lugar, la oracle dependency, que implica la posibilidad de errores en la clasificación, ya que se requiere de la intervención humana en esta etapa. En segundo lugar, está el labeling effort, qué es el esfuerzo necesario para entrenar a la persona que realiza esta clasificación. Estos retos exigen certeza en la elección de la query strategy, para ahorrar el esfuerzo humano que requiere esta etapa. Los resultados de la clasificación de los oracle se almacenan en la base de datos."
  const paso5 = "El quinto paso consiste en entrenar a la red, incorporando los datos obtenidos en la etapa anterior."
  const paso6 = "Finalmente, la sexta etapa consiste en un bucle entre las etapas tres y cinco. Por tanto, este proceso de active learning es un proceso iterativo, que continúa hasta obtener los datos necesarios para entrenar a la red."
  const [texto, setTexto] = React.useState(paso1)
  return (
    <Grid container spacing={2} mt={4} mb={4}>
      <Grid size={6}>
        <Button color={paso1==texto?"primary":"#222"} onClick={()=> setTexto(paso1)} sx={{display:"block", padding:"20px"}}>1. Clasificación aleatoria de datos</Button>
        <Button color={paso2==texto?"primary":"#222"} onClick={()=> setTexto(paso2)} sx={{display:"block", padding:"20px"}}>2. Entrenamiento del modelo</Button>
        <Button color={paso3==texto?"primary":"#222"} onClick={()=> setTexto(paso3)} sx={{display:"block", padding:"20px"}}>3. Implementación query strategy</Button>
        <Button color={paso4==texto?"primary":"#222"} onClick={()=> setTexto(paso4)} sx={{display:"block", padding:"20px"}}>4. Clasificacion datos seleccionados</Button>
        <Button color={paso5==texto?"primary":"#222"} onClick={()=> setTexto(paso5)} sx={{display:"block", padding:"20px"}}>5. Entrenamiento del modelo</Button>
        <Button color={paso6==texto?"primary":"#222"} onClick={()=> setTexto(paso6)} sx={{display:"block", padding:"20px"}}>6. Repetición pasos, del 3 al 5</Button>
      </Grid>
      <Grid size={6}>
        <Paper sx={{height:"400px"}}>
          <Typography variant='body1' p={6}>{texto}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Proyecto1ActiveLearning