import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import NewPage from './pages/New';
import HomePage from './pages/Home';

function App() {
  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff"
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
