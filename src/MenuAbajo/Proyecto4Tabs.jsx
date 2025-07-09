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

export default function Proyecto4Tabs() {
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
          <Tab label="Primera parte" />
          <Tab label="Segunda parte" />
          <Tab label="Tercera parte" />
          <Tab label="Cuarta parte" />
          <Tab label="Quinta parte" />
          <Tab label="Sexta parte" />
          <Tab label="Séptima parte" />
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Tiempo de viaje de taxis en Nueva York por minutos</Typography>
              <Typography variant='body1' p={6}>Como se puede apreciar a partir del histograma muchas veces el tiempo de viaje se termina aproximando al finalizar cada minuto, también se puede ver una concentración de viajes los cuales fueron aproximados con una hora de duración, si bien esto implica que existe un nivel de imprecisión este no parece tan elevado para alterar el análisis.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Número de viajes por día de la semana</Typography>
              <Typography variant='body1' p={6}>Como se puede apreciar en el gráfico, el miercoles es el día en el cual se producen la mayoría de los viajes. Llama la atención la gran cantidad de viajes realizados el fin de semana, el sábado existe una gran cantidad de viajes, mientras que el domingo disminuyen, siendo el día con menos viajes, mas es difícil saber si es que el domingo hay baja demanda de viajes o si es que es tomado como día libre por los conductores.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Número de viajes por hora del dia</Typography>
              <Typography variant='body1' p={6}>Como se aprecia en el histograma la mayoría de los viajes en taxi son realizados en horas de la tarde, alrededor de las 15 y 20 horas. En la madrugada la frecuencia de viajes disminuye drásticamente, lo cual debe provocarse por una menor demanda de pasajeros y oferta de vehículos.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Número de viajes por hora del día y ciertos días de la semana</Typography>
              <Typography variant='body1' p={6}>Al comparar la distribución de los viajes en tres días con características diferentes, como lo son el lunes, el viernes y el domingo, se aprecian particularidades. Tanto el viernes como el domingo muestran una mayor proporción de viajes las ultimas horas del día, lo cual se explica por ser el domingo día de descanso, y la noche del viernes el comienzo de las actividades propias del fin de semana. El lunes por ser un día laboral posee una mayor proporción de viajes durante el amanecer. En las primeras horas de domingo se aprecia una proporción mayor de viajes que en los otros días, producto de las actividades nocturnas del fin de semana.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Velocidad de los viajes de taxi</Typography>
              <Typography variant='body1' p={6}>Como se puede apreciar en el grafico la gran mayoría de los viajes son realizados a una velocidad de mas o menos 20 kilómetros. Por lo demás, serán descartados aquellos viajes que superen los 100 kilómetros de hora promedio, dado que se considera poco realista alcanzar dichos rendimientos dentro de una ciudad.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Medio de pago para el viaje en taxi</Typography>
              <Typography variant='body1' p={6}>Los datos muestran que gran cantidad de los viajes son realizados pagando con tarjeta de crédito.</Typography>
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
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Cantidad de propina por viaje de taxi</Typography>
              <Typography variant='body1' p={6}>El 30% de los viajes realizados no recibieron propina. Se puede apreciar que gran parte de las propinas que reciben los taxistas no superan los 5 dólares. Como se puede ver la media de propina es de alrededor de 2 dólares, cantidad que se ve afectada por la gran cantidad de viajes sin propina.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
