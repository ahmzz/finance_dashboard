import { useTheme,Box,useMediaQuery } from '@mui/material'
import React from 'react'

const Dashboard = () => {
    
  const {palette}=useTheme()
  const isScreenLarge=useMediaQuery('(min-width:1200px)')

  const gridTemplateLargeScreen=`
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
  `

  const gridTemplateSmallScreen=`
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
  
  `

  return (
    <Box width="100%" height="100%" display="grid" gap="1.1rem"
      sx={
        isScreenLarge?{
          gridTemplateColumns:"repeat(3,minmax(350px,1fr))",
          gridTemplateRows:"repeat(10,minmax(50px,1fr))",
          gridTemplateAreas:gridTemplateLargeScreen
        }:{
          gridAutoColumns:"1fr",
          gridAutoRows:"70px",
          gridTemplateAreas:gridTemplateSmallScreen
        }
      }
    >
      <Box bgcolor="#fff" gridArea="a"></Box>
      <Box bgcolor="#fff" gridArea="b"></Box>
      <Box bgcolor="#fff" gridArea="c"></Box>
      <Box bgcolor="#fff" gridArea="d"></Box>
      <Box bgcolor="#fff" gridArea="e"></Box>
      <Box bgcolor="#fff" gridArea="f"></Box>
      <Box bgcolor="#fff" gridArea="g"></Box>
      <Box bgcolor="#fff" gridArea="h"></Box>
      <Box bgcolor="#fff" gridArea="i"></Box>
      <Box bgcolor="#fff" gridArea="j"></Box>

    </Box>
  )
}

export default Dashboard