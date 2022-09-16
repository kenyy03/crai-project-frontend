import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    // <header className="header-container">
    //   <h1 className="title">Crai</h1>
    //   <h3 className="subtitle">Formulario de reserva de salas de estudio</h3>
    // </header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Menu open={showMenu}>
            <MenuItem onClick={() => setShowMenu(state => !state)}>
              Home
            </MenuItem>
            <MenuItem onClick={() => setShowMenu(state => !state)}>
              About
            </MenuItem>
            <MenuItem onClick={() => setShowMenu(state => !state)}>
              Contact
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            className="subtitle"
          >
            Formulario de reserva de salas de estudio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
