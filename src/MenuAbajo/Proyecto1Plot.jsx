import { Box, Button, Collapse, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LineChart } from '@mui/x-charts/LineChart';
import { LanguageContext } from '../App';


const Proyecto1Plot = () => {

const lang = useContext(LanguageContext)
const originalData = {
    "Seleccionado":{
        "modelo": "IMDB",
        "medida": "F1 score"
    },
    "IMDB":
    {
        "Mostrar": true,
        "projectName": "IMDB",
        "casos": 25000,
        "casosClasificados": 1000,
        "usersId":[
            {
                "fullName": "Federico Soza",
                "email": "federico@gmail.com"
        },
        {
                "fullName": "Maria Tereza",
                "email": "maria@gmail.com"
        },
        ],
        "queryStategy":[
            {
                "nameModel":"Random",
                "performance-f1":[ 0.80, 0.85, 0.86, 0.85, 0.87, 0.85],
                "performance-accuracy":[0.51, 0.84, 0.86, 0.86, 0.86, 0.86]
            },
            {
                "nameModel":"Query by committee",
                "performance-f1":[ 0.59, 0.86, 0.86, 0.87, 0.88, 0.89],
                "performance-accuracy":[ 0.63, 0.86, 0.87, 0.87, 0.88, 0.89]
            },
            {
                "nameModel":"Cluster base strategies",
                "performance-f1":[ 0.59, 0.83, 0.84, 0.79, 0.81, 0.80],
                "performance-accuracy":[ 0.53, 0.82, 0.84, 0.81, 0.82, 0.81]
            },
            {
                "nameModel":" Uncertainty marginal sampling",
                "performance-f1":[0.52, 0.86, 0.83, 0.85, 0.85, 0.87],
                "performance-accuracy":[ 0.61, 0.86, 0.83, 0.84, 0.85, 0.87]
            },
            {
                "nameModel":" Uncertanty samplig least confident",
                "performance-f1":[0.31, 0.74, 0.82, 0.84, 0.83, 0.86],
                "performance-accuracy":[0.55, 0.75, 0.83, 0.84, 0.84, 0.85]
            },
            {
                "nameModel":"Text-generation",
                "performance-f1":[0.82, 0.81, 0.83, 0.82, 0.81, 0.82],
                "performance-accuracy":[0.84, 0.86, 0.84, 0.87, 0.87, 0.86]
            },
            {
                "nameModel":"Token-replacement",
                "performance-f1":[0.73, 0.81, 0.78, 0.80, 0.81, 0.79],
                "performance-accuracy":[0.82, 0.87, 0.82, 0.86, 0.83, 0.84]
            },
        ],
        "Cases": [
            {
                "Document": "mal producto",
                "Categoria": "Negativo"
            }
        ]
    },
    "Gretelai":
    {
        "Mostrar": true,
        "projectName": "Gretelai",
        "casos": 5850,
        "casosClasificados": 1000,
        "usersId":[
            {
                "fullName": "Federico Soza",
                "email": "federico@gmail.com"
        },
        {
                "fullName": "Maria Tereza",
                "email": "maria@gmail.com"
        },
        ],
        "queryStategy":[
            {
                "nameModel":"Random",
                "performance-f1":[0.00, 0.02, 0.01, 0.18, 0.17, 0.22],
                "performance-accuracy":[ 0.01, 0.04, 0.04, 0.24, 0.23, 0.29]
            },
            {
                "nameModel":"Query by committee",
                "performance-f1":[0.00, 0.00, 0.08, 0.05, 0.11, 0.10],
                "performance-accuracy":[ 0.00, 0.03, 0.07, 0.12, 0.16, 0.14]
            },
            {
                "nameModel":"Cluster base strategies",
                "performance-f1":[0.00, 0.00, 0.01, 0.11, 0.14, 0.05],
                "performance-accuracy":[  0.01, 0.01, 0.04, 0.16, 0.20, 0.12]
            },
            {
                "nameModel":" Uncertainty marginal sampling",
                "performance-f1":[0.00, 0.02, 0.07, 0.13, 0.12, 0.16],
                "performance-accuracy":[ 0.01, 0.04, 0.13, 0.18, 0.18, 0.21]
            },
            {
                "nameModel":" Uncertanty samplig least confident",
                "performance-f1":[0.00, 0.01, 0.05, 0.10, 0.16, 0.31],
                "performance-accuracy":[0.00, 0.05, 0.08, 0.13, 0.22, 0.38]
            },
            {
                "nameModel":"Text-generation",
                "performance-f1":[0.00, 0.00, 0.08, 0.14, 0.18, 0.30],
                "performance-accuracy":[0.03, 0.02, 0.12, 0.19, 0.21, 0.35]
            },
            {
                "nameModel":"Token-replacement",
                "performance-f1":[0.00, 0.00, 0.05, 0.10, 0.08, 0.21],
                "performance-accuracy":[0.02, 0.02, 0.03, 0.02, 0.14, 0.12]
            },
        ],
        "Cases": [
            {
                "Document": "mal producto",
                "Categoria": "Negativo"
            }
        ]
    },
    "aote-unbalanced":
    {
        "Mostrar": true,
        "projectName": "aote-unbalanced",
        "casos": 3390,
        "casosClasificados": 1000,
        "usersId":[
            {
                "fullName": "Federico Soza",
                "email": "federico@gmail.com"
        },
        {
                "fullName": "Maria Tereza",
                "email": "maria@gmail.com"
        },
        ],
        "queryStategy":[
            {
                "nameModel":"Random",
                "performance-f1":[ 0.26, 0.49, 0.62, 0.65, 0.71, 0.74],
                "performance-accuracy":[0.38, 0.56, 0.66, 0.68, 0.73, 0.75]
            },
            {
                "nameModel":"Query by committee",
                "performance-f1":[0.59, 0.73, 0.78, 0.76, 0.76, 0.77],
                "performance-accuracy":[ 0.65, 0.74, 0.78, 0.77, 0.78, 0.77]
            },
            {
                "nameModel":"Cluster base strategies",
                "performance-f1":[0.26, 0.59, 0.78, 0.70, 0.79, 0.84],
                "performance-accuracy":[ 0.42, 0.64, 0.79, 0.75, 0.79, 0.84]
            },
            {
                "nameModel":" Uncertainty marginal sampling",
                "performance-f1":[0.23, 0.36, 0.40, 0.48, 0.53, 0.53],
                "performance-accuracy":[ 0.34, 0.39, 0.47, 0.53, 0.54, 0.56]
            },
            {
                "nameModel":" Uncertanty samplig least confident",
                "performance-f1":[0.34, 0.47, 0.58, 0.60, 0.65, 0.67],
                "performance-accuracy":[0.43, 0.55, 0.63, 0.63, 0.67, 0.69]
            },
            {
                "nameModel":"Text-generation",
                "performance-f1":[0.34, 0.47, 0.54, 0.63, 0.64, 0.66],
                "performance-accuracy":[0.41, 0.55, 0.60, 0.66, 0.68, 0.69]
            },
            {
                "nameModel":"Token-replacement",
                "performance-f1":[0.31, 0.54, 0.64, 0.72, 0.75, 0.77],
                "performance-accuracy":[0.43, 0.60, 0.69, 0.75, 0.77, 0.78]
            },
        ],
        "Cases": [
            {
                "Document": "mal producto",
                "Categoria": "Negativo"
            }
        ]
    },
    "verTexto": 0,
    "textos": [
        "Not very good quality cable . Sometimes the old addage ' You get what you pay for ' is apllicable such as this case .",
        "We bought this as a Christmas gift for our niece and her family . Her children just loved it ! GREAT BUY !",
        "I also liked the glass screen .",
        "Games being the main issue .",
        "My son loves these , and wears them all the time . They could use better velcro so they don 't fall off so easily , but for the price point the product is great !",
    ]
}


const [data, setData] = useState(originalData);

  const getters = {
    getTableInformation: (project, queryStategy = "queryStategy") => {
      return data[project][queryStategy].map((x) => {
        return x
      })
    },
    getRowTable: (baseDatos) => [data[baseDatos]["projectName"], data[baseDatos]["casos"], data[baseDatos]["casosClasificados"], data[baseDatos]["queryStategy"].map(x => {
      return{
        nombreModelo: x["nameModel"],
        F1Score: x["performance-f1"][5],
        accuracy: x["performance-accuracy"][5],
      }
    })],
    getTodo: () => data,
    getScore: () => data["Seleccionado"]["medida"],
    getTablaSeleccionada: () => data["Seleccionado"]["modelo"],
    getTextoParaClasificar: () => data["verTexto"],
    getVerTextoParaClasificar: (numero) => data["textos"][numero],
  }

const setters = {
    setTableInformation: (nuevo) => setData(nuevo),
    setMostrarGrafico: () => setData({...data, "Seleccionado":{
        "modelo": data.Seleccionado.modelo,
        "medida": data.Seleccionado.medida == "F1 score" ? "Accuracy" : "F1 score"
    }}),
    setCambiarGrafico: (baseSeleccionada) => setData({...data, "Seleccionado":{
        "modelo": data.Seleccionado.modelo = baseSeleccionada,
        "medida": data.Seleccionado.medida
    }}),
    setNuevoTexto: () => setData({...data, "verTexto": data["verTexto"] += 1}),
  }




function createData(modelName, casos, casosClasificados, queryStrategies) {
  return {
   modelName, 
   casos, 
   casosClasificados, 
   queryStrategies: queryStrategies.map(x => {
    return {
        nombreModelo: x["nombreModelo"],
        F1Score: x["F1Score"],
        accuracy: x["accuracy"],
    }
   })
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  // const setters = React.useContext(SetDataContext)
  
  return (
    
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.modelName}
        </TableCell>
        <TableCell align="right">{row.casos}</TableCell>
        <TableCell align="right">{row.casosClasificados}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Button 
              onClick={() => setters.setCambiarGrafico(row.modelName)}
              >
                {lang == "es"?"Mostrar datos":"Show data"}
              </Button>
              <Typography variant="h6" gutterBottom component="div">
                Query Strategies
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>{lang == "es"?"Estrategia":"Strategy"}</TableCell>
                    <TableCell>F1 Score</TableCell>
                    <TableCell align="right">Accuracy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.queryStrategies.map((queryStrategiesRow) => (
                    <TableRow key={queryStrategiesRow.key}>
                      <TableCell component="th" scope="row">
                        {queryStrategiesRow.nombreModelo}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {queryStrategiesRow.F1Score}
                      </TableCell>
                      <TableCell align="right">{queryStrategiesRow.accuracy}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



  const rows = [
    createData(...getters.getRowTable("IMDB")),
    createData(...getters.getRowTable("Gretelai")),
    createData(...getters.getRowTable("aote-unbalanced")),
  ];
  return (
    <Grid container spacing={2} p={2}>
      <Grid size={6}>
        <Button onClick={() => setters.setMostrarGrafico()}>
                {lang == "es"?"Mostrar":"Show"} {getters.getScore() == "F1 score" ? "Accuracy" : "F1 score"}
              </Button>
        <LineChart
        grid={{ vertical: true, horizontal: true }}
        
        yAxis= {[
      {
        label: lang == "es"?'Performance del modelo':'Model performance',
      }]}
        xAxis={[
          {
              data: [1, 2, 3, 4, 5, 6],
              label: lang == "es"?'Número de iteraciones':'Number of iterations', 
          },
      ]}
      series = {getters.getTableInformation(getters.getTablaSeleccionada()).map(x => {
          return {
              data: x[getters.getScore()=="F1 score"?"performance-f1":"performance-accuracy"],
              // area: true,
              label: x["nameModel"],
          }
      })}
      //   series={[
      //     {
      //       data: [2, 5.5, 2, 8.5, 1.5, 5],
            
      //     },
      //     {
      //       data: [6, 5.5, 2, 8.5, 1.5, 5],
      //       area: true,
      //       label: "hola",

      //     },
      //   ]}
        height={400}
      />
    </Grid>




    <Grid size={6}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>{lang == "es"?"Nombre Base de datos":"Name of the Database"}</TableCell>
                <TableCell align="right">{lang == "es"?"Casos":"Cases"}</TableCell>
                <TableCell align="right">{lang == "es"?"Clasificados":"Clasified"}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Grid>


    </Grid>
  )
}

export default Proyecto1Plot