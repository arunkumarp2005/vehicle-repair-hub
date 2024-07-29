import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    { title: "Oil Change", description: "Keep your engine running smoothly with regular oil changes." },
    { title: "Tire Rotation", description: "Extend the life of your tires with proper rotation." },
    { title: "Brake Service", description: "Ensure your safety with regular brake inspections and maintenance." },
    { title: "Engine Repair", description: "Comprehensive engine diagnostics and repair services." },
  ];

  return (
    <div className="services-section" id="services-section">
      <Container>
        <Typography variant="h4" gutterBottom align="center">Our Services</Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className="service-card">
                <CardContent>
                  <Typography variant="h6" gutterBottom>{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ServicesSection;
