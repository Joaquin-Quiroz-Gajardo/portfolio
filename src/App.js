import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@emotion/react';
import theme from './Utils/Pallette';
import { BrowserRouter, createBrowserRouter, RouterProvider, useNavigate } from 'react-router';
import Home from './MenuArriba/Home';
import CV from './MenuArriba/CV';
import Proyecto1 from './MenuAbajo/Proyecto1';
import Proyecto2 from './MenuAbajo/Proyecto2';
import Proyecto3 from './MenuAbajo/Proyecto3';
import Proyecto4 from './MenuAbajo/Proyecto4';
import Proyecto5 from './MenuAbajo/Proyecto5';
import { Box, Grid, Toolbar } from '@mui/material';
import Proyecto6 from './MenuAbajo/Proyecto6';
import { createContext, useState } from 'react';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home lang="en"></Home>
  },
  {
    path:"/es",
    element:<Home lang="es"></Home>
  },
  // {
  //   path:"/contact",
  //   element:<CV></CV>
  // },
  {
    path:"/proyect1",
    element:<Proyecto1 lang="en"></Proyecto1>
  },
  {
    path:"/es/proyect1",
    element:<Proyecto1 lang="es"></Proyecto1>
  },
  {
    path:"/proyect2",
    element:<Proyecto2 lang="en"></Proyecto2>
  },
  {
    path:"/es/proyect2",
    element:<Proyecto2 lang="es"></Proyecto2>
  },
  {
    path:"/proyect3",
    element:<Proyecto3 lang="en"></Proyecto3>
  },
  {
    path:"/es/proyect3",
    element:<Proyecto3 lang="es"></Proyecto3>
  },
  {
    path:"/proyect4",
    element:<Proyecto4 lang="en"></Proyecto4>
  },
  {
    path:"/es/proyect4",
    element:<Proyecto4 lang="es"></Proyecto4>
  },
  {
    path:"/proyect5",
    element:<Proyecto5 lang="en"></Proyecto5>
  },
  {
    path:"/es/proyect5",
    element:<Proyecto5 lang="es"></Proyecto5>
  },
  {
    path:"/proyect6",
    element:<Proyecto6 lang="en"></Proyecto6>
  },
  {
    path:"/es/proyect6",
    element:<Proyecto6 lang="es"></Proyecto6>
  },
])

export const LanguageContext = createContext()
export const SetLanguageContext = createContext()
function App() {
  const [lang, setLang] = useState("en");
  return (
    <SetLanguageContext.Provider value={setLang}>
    <LanguageContext.Provider value={lang}>
      <ThemeProvider theme={theme}>
        <div className="App">    
          <Sidebar></Sidebar>
          <RouterProvider router={router}></RouterProvider>
          <Box mb={15}></Box>
        </div>
      </ThemeProvider>
    </LanguageContext.Provider>
    </SetLanguageContext.Provider>
  );
}

export default App;
