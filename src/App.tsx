import {useMemo} from 'react'
import {createTheme} from "@mui/material/styles"
import { themeSettings } from './theme'
import {ThemeProvider,CssBaseline, Box} from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
function App() {
  
  const theme = useMemo(()=>createTheme(themeSettings),[])
  return (
    <div className="app">

      <BrowserRouter>
      
      <ThemeProvider theme={theme}>

      <CssBaseline/>
      <Box height="100%" width="100%" padding="1rem 2rem ">

      </Box>
      </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
