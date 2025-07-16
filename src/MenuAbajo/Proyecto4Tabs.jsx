import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import taxiNYTiempoDeViaje from '../Imagenes/taxiNYTiempoDeViaje.png'
import taxiNYNumeroDeViajesPorDiaDeLaSemana from '../Imagenes/taxiNYNumeroDeViajesPorDiaDeLaSemana.png'
import taxiNYNumeroDeViajesPorHoraDelDia from '../Imagenes/taxiNYNumeroDeViajesPorHoraDelDia.png'
import taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana from '../Imagenes/taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana.png'
import taxiNYVelocidad from '../Imagenes/taxiNYVelocidad.png'
import taxiNYTipoPago from '../Imagenes/taxiNYTipoPago.png'
import taxiNYPropina from '../Imagenes/taxiNYPropina.png'
import { LanguageContext } from '../App';

export default function Proyecto4Tabs() {
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
          <Tab label={lang == "es"?"Primera parte":"Part One"} />
          <Tab label={lang == "es"?"Segunda parte":"Part Two"} />
          <Tab label={lang == "es"?"Tercera parte":"Part Three"} />
          <Tab label={lang == "es"?"Cuarta parte":"Part Four"} />
          <Tab label={lang == "es"?"Quinta parte":"Part Five"} />
          <Tab label={lang == "es"?"Sexta parte":"Part Six"} />
          <Tab label={lang == "es"?"Séptima parte":"Part Seven"} />
        </Tabs>
      </Box>

      {value == 0?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYTiempoDeViaje}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Tiempo de viaje de taxis en Nueva York por minutos":"Taxi travel time in New York in minutes"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Como se puede apreciar a partir del histograma muchas veces el tiempo de viaje se termina aproximando al finalizar cada minuto, también se puede ver una concentración de viajes los cuales fueron aproximados con una hora de duración, si bien esto implica que existe un nivel de imprecisión este no parece tan elevado para alterar el análisis.":"As can be seen from the histogram, travel times often end up approaching the end of each minute. A concentration of trips that were approximated to an hour's duration can also be seen. While this implies a level of inaccuracy, it does not appear high enough to alter the analysis."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 1?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYNumeroDeViajesPorDiaDeLaSemana}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Número de viajes por día de la semana":"Number of trips per day of the week"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Como se puede apreciar en el gráfico, el miercoles es el día en el cual se producen la mayoría de los viajes. Llama la atención la gran cantidad de viajes realizados el fin de semana, el sábado existe una gran cantidad de viajes, mientras que el domingo disminuyen, siendo el día con menos viajes, mas es difícil saber si es que el domingo hay baja demanda de viajes o si es que es tomado como día libre por los conductores.":"As can be seen in the graph, Wednesday is the day on which most trips occur. The large number of trips made on the weekend is striking. Saturday sees a large number of trips, while Sunday sees a decrease, making it the day with the fewest trips. However, it is difficult to determine whether Sunday is due to low demand for trips or whether drivers are simply taking it as a day off."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 2?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYNumeroDeViajesPorHoraDelDia}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Número de viajes por hora del dia":"Number of trips per hour of day"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Como se aprecia en el histograma la mayoría de los viajes en taxi son realizados en horas de la tarde, alrededor de las 15 y 20 horas. En la madrugada la frecuencia de viajes disminuye drásticamente, lo cual debe provocarse por una menor demanda de pasajeros y oferta de vehículos.":"As can be seen in the histogram, the majority of taxi trips are made in the afternoon, around 3 and 8 p.m. During the early morning, the frequency of trips decreases dramatically, probably due to lower passenger demand and vehicle supply."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 3?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Número de viajes por hora del día y ciertos días de la semana":"Number of trips by time of day and certain days of the week"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Al comparar la distribución de los viajes en tres días con características diferentes, como lo son el lunes, el viernes y el domingo, se aprecian particularidades. Tanto el viernes como el domingo muestran una mayor proporción de viajes las ultimas horas del día, lo cual se explica por ser el domingo día de descanso, y la noche del viernes el comienzo de las actividades propias del fin de semana. El lunes por ser un día laboral posee una mayor proporción de viajes durante el amanecer. En las primeras horas de domingo se aprecia una proporción mayor de viajes que en los otros días, producto de las actividades nocturnas del fin de semana.":"When comparing the distribution of trips across three days with different characteristics, such as Monday, Friday, and Sunday, particularities emerge. Both Friday and Sunday show a higher proportion of trips in the late hours of the day, which is explained by Sunday being a day of rest, and Friday night being the start of weekend activities. Monday, being a workday, has a higher proportion of trips during dawn. A higher proportion of trips is observed in the early hours of Sunday than on other days, due to the weekend's nighttime activities."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 4?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYVelocidad}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Velocidad de los viajes de taxi":"Speed ​​of taxi trips"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Como se puede apreciar en el grafico la gran mayoría de los viajes son realizados a una velocidad de mas o menos 20 kilómetros. Por lo demás, serán descartados aquellos viajes que superen los 100 kilómetros de hora promedio, dado que se considera poco realista alcanzar dichos rendimientos dentro de una ciudad.":"As can be seen in the graph, the vast majority of trips are made at a speed of approximately 20 kilometers per hour. Otherwise, trips exceeding an average speed of 100 kilometers per hour will be excluded, as achieving such speeds within a city is considered unrealistic."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 5?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYTipoPago}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Medio de pago para el viaje en taxi":"Payment method for taxi rides"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"Los datos muestran que gran cantidad de los viajes son realizados pagando con tarjeta de crédito.":"Data shows that a large number of trips are made by paying with a credit card."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 6?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYPropina}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>{lang == "es"?"Cantidad de propina por viaje de taxi":"Tip amount per taxi ride"}</Typography>
              <Typography variant='body1' p={6}>{lang == "es"?"El 30% de los viajes realizados no recibieron propina. Se puede apreciar que gran parte de las propinas que reciben los taxistas no superan los 5 dólares. Como se puede ver la media de propina es de alrededor de 2 dólares, cantidad que se ve afectada por la gran cantidad de viajes sin propina.":"Thirty percent of trips received no tips. It can be seen that the majority of tips received by taxi drivers are under $5. As you can see, the average tip is around $2, an amount significantly affected by the large number of untipped trips."}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
