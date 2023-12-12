import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    navigate('/login');

    // Add the logout logic here
    // For example, if you are using Firebase:
    // auth.signOut().then(() => navigate('/login'));

    // For now, simulate the logout and navigate to login
    console.log('Logout clicked');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <h1>HU-Eats</h1>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          <NotificationsActiveIcon />
        </Link>
      </div>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List style={{ width: '250px' }}>
          <Link to="/orders" className="drawer-link">
            <ListItem button key="Orders">
              <ListItemText primary="Orders" />
              <AssignmentIcon />
            </ListItem>
          </Link>
          <Link to="/addfood" className="drawer-link">
            <ListItem button key="Add Food">
              <ListItemText primary="Add Food" />
              <FastfoodIcon />
            </ListItem>
          </Link>
          <ListItem button key="Setting">
            <ListItemText primary="Settings" />
            <SettingsIcon />
          </ListItem>
          <ListItem button key="Account Management">
            <ListItemText primary="Account Management" />
            <PeopleAltIcon />
          </ListItem>
          <ListItem button key="Logout" onClick={handleLogout}>
            <ListItemText primary="Logout" />
            <LogoutIcon />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;
