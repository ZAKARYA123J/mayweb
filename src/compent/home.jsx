import React from 'react';
import ImageWithText from './service';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
 
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" component="div" gutterBottom>
        Welcome to Our Website
      </Typography>

      <Typography variant="body1" paragraph>
        As the driving force behind this digital space, I'm Zakaria—a seasoned full-stack developer dedicated to bringing
        your ideas to life with innovation and precision. With expertise in both frontend and backend technologies,
        crafting seamless and robust web applications is my forte.
      </Typography>

      <Typography variant="body1" paragraph>
        **Skills Snapshot:**
        - **Frontend Technologies:** React.js, 
        - **Backend Expertise:** Node.js, MongoDB, 
        - **Full-Stack Mastery:** Creating cohesive applications for optimal performance and user satisfaction
      </Typography>


      <Button variant="contained" color="primary">
        Learn More
      </Button>
      <br/>
    
    </Container>

  );
};

export default Home;
