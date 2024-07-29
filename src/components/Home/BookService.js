import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import './BookService.css';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="book-service-section">
      <Container>
        <Typography variant="h4" gutterBottom>Book a Service</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            fullWidth
            required
          />
          <TextField
            label="Service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Preferred Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">Book Now</Button>
        </form>
      </Container>
    </div>
  );
};

export default BookService;
