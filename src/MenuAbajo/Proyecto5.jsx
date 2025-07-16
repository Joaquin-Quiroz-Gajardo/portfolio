import { Chip, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import haar from '../Imagenes/Haar.gif'
import { LanguageContext, SetLanguageContext } from '../App'

const Proyecto5 = (props) => {
    const lang = useContext(LanguageContext)
    const setLang = useContext(SetLanguageContext)
    props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
          <Typography variant='h2' component="h1" p={2}>{lang == "es"?"Reconocimiento de ojos por coordenada":"Eye recognition by coordinate"}</Typography>
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
          <Typography variant='body1' p={2}>{lang == "es"?"Implementación de filtros de Haar para detección de rostro,complementado con un detector de pupila para determinar si la persona está despierta o no.":"Implementation of Haar filters for face detection, complemented by a pupil detector to determine whether the person is awake or not."}</Typography>
        </>
  )
}

export default Proyecto5