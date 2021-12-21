import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Router from './routers/router';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter } from 'react-router-dom';

const drawerWidth = 240;

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header
          sidbarIsOpened={open}
          onClick={handleDrawerOpen}
        />
        <Sidebar
          open={open}
          onClose={handleDrawerClose}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Router/>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
