import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@emotion/react';
import theme from './Utils/Pallette';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router';
import Home from './MenuArriba/Home';
import CV from './MenuArriba/CV';
import Proyecto1 from './MenuAbajo/Proyecto1';
import Proyecto2 from './MenuAbajo/Proyecto2';
import Proyecto3 from './MenuAbajo/Proyecto3';
import Proyecto4 from './MenuAbajo/Proyecto4';
import Proyecto5 from './MenuAbajo/Proyecto5';
import { Box, Grid, Toolbar } from '@mui/material';
import Proyecto6 from './MenuAbajo/Proyecto6';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home>hola</Home>
  },
  {
    path:"/contact",
    element:<CV></CV>
  },
  {
    path:"/proyect1",
    element:<Proyecto1>1</Proyecto1>
  },
  {
    path:"/proyect2",
    element:<Proyecto2>2</Proyecto2>
  },
  {
    path:"/proyect3",
    element:<Proyecto3>3</Proyecto3>
  },
  {
    path:"/proyect4",
    element:<Proyecto4>4</Proyecto4>
  },
  {
    path:"/proyect5",
    element:<Proyecto5>5</Proyecto5>
  },
  {
    path:"/proyect6",
    element:<Proyecto6>6</Proyecto6>
  },
])

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Sidebar></Sidebar>
          <RouterProvider router={router}></RouterProvider>
          <Box mb={15}></Box>
        </div>
      </ThemeProvider>
  );
}

export default App;
