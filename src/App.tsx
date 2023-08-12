import {useMemo} from 'react'
import {createTheme} from "@mui/material/styles"
import { themeSettings } from './theme'
import {ThemeProvider,CssBaseline, Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "@/scenes/navbar"
function App() {
  
  const theme = useMemo(()=>createTheme(themeSettings),[])
  return (
    <div className="app">

      <BrowserRouter>
      
      <ThemeProvider theme={theme}>

      <CssBaseline/>
      <Box height="100%" width="100%" padding="1rem 2rem 4rem 2rem">

        <Navbar/>

        <Routes>
          <Route path='/' element={<h1>Dashboard</h1>} />
          <Route path='/predictions' element={<h1>Predictions</h1>}/>
        </Routes>

      </Box>
      </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
