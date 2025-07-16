import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LanguageContext, SetLanguageContext } from '../App'

const Home = (props) => {
  const lang = useContext(LanguageContext)
  const setLang = useContext(SetLanguageContext)
  props.lang == "es" ? setLang("es") : console.log("")
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>{lang == "es"?"Portafolio Joaquín Quiroz":"Joaquín Quiroz Portfolio"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Especialista en inteligencia artificial (FIUBA). Experiencia en análisis de datos, web scraping, base de datos SQL, machine learning, modelos clasificadores de texto y React.":"Artificial Intelligence Specialist (FIUBA). Experience in data analysis, web scraping, SQL databases, machine learning, text classifier models, and React."}</Typography>

      <Typography variant='h4' component="h2" p={2}>{lang == "es"?"Contacto y CV":"Contact and CV"}</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Teléfono":"Phone"}: +56986578761</Typography>
      <Typography variant='body1' p={2}>{lang == "es"?"Correo: joaquin.quiroz.gajardo@gmail.com":"Email: joaquin.quiroz.gajardo@gmail.com"}</Typography>
      <Typography variant='body1' p={2}>CV: <a href={lang == "es"?'https://docs.google.com/document/d/11jQ-pDxn-r_3aURiNcFRUPT62WOKfoGAOT-0f3jag58/edit?usp=drive_link':"https://docs.google.com/document/d/1z78KT0A_oGos6dDZBQNan7VZbG-m2GuP-cqo4LqfpkI/edit?usp=drive_link"} target='_blank'>Link</a></Typography>
    </>
  )
}

export default Home