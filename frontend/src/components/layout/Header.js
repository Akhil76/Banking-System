import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar,Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../statemanager/actions/auth';

const drawerWidth = 240;

function Header(props){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin Dashboard
        </Typography>
        <div style={{marginLeft:"auto"}}>
        <Button 
        color="inherit" 
        style={{textTransform:"none"}}
        onClick={()=>dispatch(logout(navigate))}
        >
        Logout</Button>
      </div>
      </Toolbar>
      
    </AppBar>
  )
}

export default Header;