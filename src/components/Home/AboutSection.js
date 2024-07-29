import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <Typography variant="h4" gutterBottom align="center" className="about-title">
        About Us
      </Typography>
      <Card className="about-card">
        <CardContent>
          <Typography variant="h6" align="justify" className="about-text">
            Welcome to DriveDoctors – your one-stop solution for all car servicing needs.
          </Typography>
          <Typography variant="h6" mt={2} align="justify" className="about-text">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="justify" className="about-text">
            At DriveDoctors, our mission is to provide top-notch car services to ensure your vehicle is always running smoothly. From routine maintenance to emergency repairs, our platform connects you with skilled mechanics and service providers.
          </Typography>
          <Typography variant="h6" mt={2} align="justify" className="about-text">
            Why Choose Us?
          </Typography>
          <Typography variant="body1" paragraph align="justify" className="about-text">
            <ul>
              <li>Wide Range of Services: Whether you need an oil change, tire rotation, or a complete engine overhaul, we have you covered.</li>
              <li>Experienced Professionals: Our network includes certified and experienced mechanics ready to offer high-quality services.</li>
              <li>User-Friendly Platform: Easily book services, track your service history, and get reminders for upcoming maintenance.</li>
              <li>Affordable Prices: We offer competitive pricing without compromising on quality.</li>
              <li>Customer Satisfaction: We prioritize your satisfaction and strive to deliver the best service experience.</li>
            </ul>
          </Typography>
          <Button>Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
