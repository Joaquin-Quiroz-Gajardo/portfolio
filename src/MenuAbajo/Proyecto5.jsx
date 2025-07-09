import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import haar from '../Imagenes/Haar.gif'

const Proyecto5 = () => {
  return (
    <>
          <Typography variant='h2' component="h1" p={2}>Reconocimiento de ojos por coordenada</Typography>
          <Container>
            <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
            <Chip color='success' label="Image recognition" sx={{margin:"5px"}}></Chip>
            <Chip color='success' label="Scikit-learn" sx={{margin:"5px"}}></Chip>
            <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
            <Chip color='success' label="Pytorch" sx={{margin:"5px"}}></Chip>
          </Container>
          <Container maxWidth={'sm'} sx={{padding:"2px"}}>
            <img style={{width:"100%", height:"100%"}} src={haar}></img>
          </Container>
          <Typography variant='body1' p={2}>Implementación de filtros de Haar para detección de rostro,complementado con un detector de pupila para determinar si la persona está despierta o no.</Typography>
        </>
  )
}

export default Proyecto5