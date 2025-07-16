import { Button, Grid, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LanguageContext } from '../App';

const Proyecto1ActiveLearning = () => {
  const lang = useContext(LanguageContext)
  const paso1 = lang == "es"?"El primer paso es la clasificación aleatoria, que implica seleccionar aleatoriamente casos de la base de datos para ser clasificados. Como no hay un modelo entrenado, no hay una metodología para optimizar la selección de datos en esta etapa.":"The graph shows the first step is random classification, which involves randomly selecting cases from the database to be classified. Since there is no trained model, there is no methodology to optimize data selection at this stage."
  const paso2 = lang == "es"?"El segundo paso consiste en entrenar el modelo. Generalmente, cuando se realiza el primer paso, la porción de datos obtenida es menor a la que finalmente estará disponible, por lo que es común un desempeño deficiente en la clasificación de datos durante esta etapa.":"The second step involves training the model. Typically, when performing the first step, the data portion obtained is smaller than what will ultimately be available, so poor data classification performance is common during this stage."
  const paso3 = lang == "es"?"El tercer paso consiste en la query strategy. Esta estrategia selecciona las instancias más informativas dentro de la base de datos sin clasificar. Este paso debe estar aislado de los anteriores, ya que permite modificar la estrategia de consulta, mientras que el resto del código de la API permanece intacto. También es importante recordar que existe la query strategy dependency, que es un problema en el que el éxito del proceso de active learning depende en gran medida de la query strategy seleccionada. Por lo tanto, es importante poder modificar esta estrategia fácilmente.":"The third step is the query strategy. This strategy selects the most informative instances within the unsorted database. This step should be isolated from the previous steps, as it allows the query strategy to be modified while leaving the rest of the API code intact. It's also important to remember that query strategy dependency exists, a problem in which the success of the active learning process depends heavily on the selected query strategy. Therefore, it's important to be able to easily modify this strategy."
  const paso4 = lang == "es"?"El cuarto paso es la clasificación de los datos seleccionados en la etapa anterior. Esta etapa presenta dos retos específicos. En primer lugar, la oracle dependency, que implica la posibilidad de errores en la clasificación, ya que se requiere de la intervención humana en esta etapa. En segundo lugar, está el labeling effort, qué es el esfuerzo necesario para entrenar a la persona que realiza esta clasificación. Estos retos exigen certeza en la elección de la query strategy, para ahorrar el esfuerzo humano que requiere esta etapa. Los resultados de la clasificación de los oracle se almacenan en la base de datos.":"The fourth step is the classification of the data selected in the previous stage. This stage presents two specific challenges. First, oracle dependency, which implies the possibility of errors in the classification, as human intervention is required at this stage. Second, there is labeling effort, which is the effort required to train the person who performs this classification. These challenges require precision in the choice of query strategy to avoid the human effort required for this stage. The oracle classification results are stored in the database."
  const paso5 = lang == "es"?"El quinto paso consiste en entrenar a la red, incorporando los datos obtenidos en la etapa anterior.":"The fifth step consists of training the network, incorporating the data obtained in the previous stage."
  const paso6 = lang == "es"?"Finalmente, la sexta etapa consiste en un bucle entre las etapas tres y cinco. Por tanto, este proceso de active learning es un proceso iterativo, que continúa hasta obtener los datos necesarios para entrenar a la red.":"Finally, the sixth stage consists of a loop between stages three and five. Therefore, this active learning process is an iterative process, continuing until the data needed to train the network is obtained."
  const [texto, setTexto] = React.useState(paso1)
  return (
    <Grid container spacing={2} mt={4} mb={4}>
      <Grid size={6}>
        <Button color={paso1==texto?"primary":"#222"} onClick={()=> setTexto(paso1)} sx={{display:"block", padding:"20px"}}>1. {lang == "es"?"Clasificación aleatoria de datos":"Random data classification"}</Button>
        <Button color={paso2==texto?"primary":"#222"} onClick={()=> setTexto(paso2)} sx={{display:"block", padding:"20px"}}>2. {lang == "es"?"Entrenamiento del modelo":"Model training"}</Button>
        <Button color={paso3==texto?"primary":"#222"} onClick={()=> setTexto(paso3)} sx={{display:"block", padding:"20px"}}>3. {lang == "es"?"Implementación query strategy":"Query strategy implementation"}</Button>
        <Button color={paso4==texto?"primary":"#222"} onClick={()=> setTexto(paso4)} sx={{display:"block", padding:"20px"}}>4. {lang == "es"?"Clasificacion datos seleccionados":"Classification of selected data"}</Button>
        <Button color={paso5==texto?"primary":"#222"} onClick={()=> setTexto(paso5)} sx={{display:"block", padding:"20px"}}>5. {lang == "es"?"Entrenamiento del modelo":"Model training"}</Button>
        <Button color={paso6==texto?"primary":"#222"} onClick={()=> setTexto(paso6)} sx={{display:"block", padding:"20px"}}>6. {lang == "es"?"Repetición pasos, del 3 al 5":"Repeat steps, from 3 to 5"}</Button>
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