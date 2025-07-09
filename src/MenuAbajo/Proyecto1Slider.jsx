import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../style/Proyecto1Slider.css';
import { Typography } from '@mui/material';
import uncertantySamplingLeastConfident from "../Imagenes/uncertanty samplin least confident.png"
import uncertantyMarginalSampling from "../Imagenes/uncertanty marginal sampling.png"
import ClusterBaseStrategies from "../Imagenes/cluster base strategies.png"
import queryByCommitte from "../Imagenes/query by committe.png"
import TokenGeneration from "../Imagenes/token generation.png"
import TextGeneration from "../Imagenes/text generation.png"


const FadeExample = () => {
  const images = [
    uncertantySamplingLeastConfident,
    uncertantyMarginalSampling,
    ClusterBaseStrategies,
    queryByCommitte,
    TokenGeneration,
    TextGeneration,
  ];

  return (
    <div style={{marginBottom: "25px"}}>
      <Fade>
        <div className="each-slide">
          <div>
            <img src={images[0]} />
          </div>
          <Typography variant='body1' component="p">Uncertainty sampling least confident: Son elegidos para clasificar ejemplos de la base de datos no predicha respecto a los cuales el modelo presente menor seguridad en su predicción.</Typography>
        </div>
        <div className="each-slide">
          <Typography variant='body1' component="p">Uncertainty marginal sampling: Consiste en seleccionar los ejemplos no clasificados que contengan la menor diferencia entre las dos clases predichas por el modelo.</Typography>
            <div>
              <img src={images[1]} />
            </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={images[2]} />
          </div>
            <Typography variant='body1' component="p">Cluster based strategies: Consiste en seleccionar los ejemplos de la base de datos no clasificada que pertenezcan a las categorías menos comunes, según la predicción del modelo.</Typography>
        </div>
        <div className="each-slide">
          <Typography variant='body1' component="p">Query by committee: Esta estrategia implementa un ensamble de modelos. Los ejemplos de la base de datos no clasificada que generen más desacuerdo entre la predicción del modelo son seleccionados.</Typography>
          <div>
            <img src={images[3]} />
          </div>
        </div>
        <div className="each-slide">
        <div>
          <img src={images[4]} />
        </div>
        <Typography variant='body1' component="p">Token generation: Esta estrategia de active learning implementa una estrategia para aumentar los datos, consiste en reemplazar token de las clases minoritarias con otros token con similar significado, aumentando así los ejemplos en las clases minoritarias.</Typography>
        </div>
            <div className="each-slide">
            <Typography variant='body1' component="p">Text generation: Son creados ejemplos de las clases minoritarias por un modelo generador de texto, en este caso se utilizó BERT.</Typography>
            <div>
                <img src={images[5]} />
            </div>
            
            </div>
      </Fade>
    </div>
  );
};

export default FadeExample;