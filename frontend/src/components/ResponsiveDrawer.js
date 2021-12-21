import * as React from 'react';
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from '../pages/Home';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header/>
      <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Home/>
      </Box>
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;