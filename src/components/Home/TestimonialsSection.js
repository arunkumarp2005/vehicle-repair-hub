import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialsSection.css';

const TestimonialsSection = ({ id }) => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, content: "Amazing experience!", author: "John Doe" },
    { id: 2, content: "Very helpful tutors.", author: "Jane Smith" },
    { id: 3, content: "Highly recommend this platform.", author: "Sam Johnson" },
  ]);
  const [newTestimonial, setNewTestimonial] = useState({ content: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.content && newTestimonial.author) {
      setTestimonials([...testimonials, { id: testimonials.length + 1, ...newTestimonial }]);
      setNewTestimonial({ content: '', author: '' });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="testimonials-section" id={id}>
      <Typography variant="h4" gutterBottom>Testimonials</Typography>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <Box key={testimonial.id} className="testimonial-slide">
            <Typography variant="body1">{testimonial.content}</Typography>
            <Typography variant="caption">- {testimonial.author}</Typography>
          </Box>
        ))}
      </Slider>
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <TextField
          label="Your Testimonial"
          name="content"
          value={newTestimonial.content}
          onChange={handleInputChange}
          fullWidth
          required
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Your Name"
          name="author"
          value={newTestimonial.author}
          onChange={handleInputChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
};

export default TestimonialsSection;