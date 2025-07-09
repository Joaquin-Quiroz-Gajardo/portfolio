import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Portafolio Joaquín Quiroz</Typography>
      <Typography variant='body1' p={2}>Especialista en inteligencia artificial (FIUBA). Experiencia en análisis de datos, web scraping, base de datos SQL, machine learning, modelos clasificadores de texto y React.</Typography>

      <Typography variant='h4' component="h2" p={2}>Contacto y CV</Typography>
      <Typography variant='body1' p={2}>Teléfono: +56986578761</Typography>
      <Typography variant='body1' p={2}>Correo: joaquin.quiroz.gajardo@gmail.com</Typography>
      <Typography variant='body1' p={2}>CV: <a href='https://docs.google.com/document/d/11jQ-pDxn-r_3aURiNcFRUPT62WOKfoGAOT-0f3jag58/edit?usp=drive_link' target='_blank'>Link</a></Typography>
    </>
  )
}

export default Home