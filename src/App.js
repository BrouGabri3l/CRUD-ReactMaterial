import React from 'react'
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Edit from './pages/edit';
import NewUser from './pages/novo'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import { CssBaseline, IconButton, Grid } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const darkTheme = {
  mode: "dark",
};
const lightTheme = {
  palette: {
    mode: 'light',
  },
}
function App() {
  const [isDark, setDark] = useState(false)
  const baseTheme = {
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: '#5FDD9D',
      },


      secondary: {
        main: '#76F7BF',
      },
    },
  };
  const handleMode = () => {
    localStorage.setItem('themeMode', !isDark)
    setDark(!isDark)
  }
  useEffect(() => {
    const existsTheme = localStorage.getItem('themeMode')
    if (existsTheme != null) {
      (existsTheme == 'true' ? setDark(true) : setDark(false))
    } else {
      localStorage.setItem('themeMode', false)
      setDark(false)
    }
  }, [])
  return (
    <ThemeProvider theme={createTheme(baseTheme)}>
      <CssBaseline />
      <Header>
        <IconButton onClick={handleMode}>
          {!isDark ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Header>
      <Grid container sx={{ height: "100vh" }} justifyContent="center" alignItems="center" >
        < Routes >
          <Route path="/home" element={<Home />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/novo" element={<NewUser />}></Route>
        </Routes>
      </Grid>
    </ThemeProvider >
  );
}

export default App;
