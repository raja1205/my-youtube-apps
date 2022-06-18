import React from 'react';
import { Typography, Box } from '@mui/material';
import SearchBar from './SearchBar';
import logo from '../assets/logo.jpg';

const Navbar = ({ onFormSubmit }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 2,
        pt: 1,
        borderBottom: '1px solid #e3e3e3',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'white',
        gap: '10',
        width: '100%',
        zIndex: 100,
      }}
    >
      <a href='/' style={{ textDecoration: 'none' }}>
        <Typography sx={{ fontSize: 25, color: 'red', fontWeight: 800 }}>
          <img src={logo} alt="Logo" style={{height:"33px", marginTop: "5px"}} />
        </Typography>
      </a>
      <SearchBar onFormSubmit={onFormSubmit} />
    </Box>
  );
};

export default Navbar;
