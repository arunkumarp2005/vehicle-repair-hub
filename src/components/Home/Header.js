import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="navbar">
        <div className="logo-container">
          
          <Typography variant="h6" component="div" className="company-name">
            DriveDoctors
          </Typography>
        </div>
        <div className="nav-links">
          <Button color="inherit">
            <ScrollLink to="hero-section" smooth={true} duration={500}>Home</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="services-section" smooth={true} duration={500}>Services</ScrollLink>
          </Button>
          <Button color="inherit" component={RouterLink} to="/book-service">
            Book Service
          </Button>
          <Button color="inherit">
            <ScrollLink to="testimonials-section" smooth={true} duration={500}>Testimonials</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink>
          </Button>
          <Button color="inherit" component={RouterLink} to="/signin">
            Sign In
          </Button>
          <Button color="inherit" component={RouterLink} to="/signup">
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
