import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Typography variant="h3">Welcome to DriveDoctors</Typography>
        <Typography variant="h6">Your gateway to quality Service</Typography>
        <Button variant="contained" color="primary">Get Started</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
