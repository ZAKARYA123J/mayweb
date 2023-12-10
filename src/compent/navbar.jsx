import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FaReact style={{ marginTop: '9px', fontSize: '30px' }} />
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          // Remove the hover and focus styles to maintain constant background color
          /* sx={{
            '&:hover, &:focus': {
              backgroundColor: 'bleu',
            },
          }} */
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
       
          // Remove the hover and focus styles to maintain constant background color
          /* sx={{
            '&:hover, &:focus': {
              backgroundColor: 'bleu',
            },
          }} */
        >
          Products
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          // Remove the hover and focus styles to maintain constant background color
          /* sx={{
            '&:hover, &:focus': {
              backgroundColor: 'bleu',
            },
          }} */
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
