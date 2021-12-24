import React from "react";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar, Box, } from '@mui/material';
import { SidebarDatas } from './SidebarData'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "16px"
  },
  icon: {
    color: "black",
    marginRight: "-20px"
  },
  text: {
    paddingLeft: "0px"
  },

});

const drawerWidth = 240;
function Sidebar(props) {
  const classes = useStyles();
  const drawer = (
    <div style={{background:"#b0bec5"}}>
      <Toolbar />
      <Divider />
      <List>
        {SidebarDatas.map((val) => (
          <Link to={val.Link} className={classes.link}>
          <ListItem button >
            <ListItemIcon className={classes.icon}>
              {val.icon}
            </ListItemIcon>
            <ListItemText className={classes.text} primary={val.title} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> 
    </div>
  );

  const { onClose, open } = props;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
          
        }}
        
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}


export default Sidebar;