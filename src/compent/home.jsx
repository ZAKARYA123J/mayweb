import React from 'react';
import ImageWithText from './service';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  const imageInfoArray = [
    {
      imageUrl: 'https://www.netzpiloten.de/wp-content/uploads/2019/06/adobestock_sergey_coding_lernen_titelbild.jpg',
      title: 'programation web',
      description: 'Enhance your online presence with our cutting-edge Web Programming Service. Our team of skilled developers is dedicated to crafting seamless and innovative web solutions tailored to meet your unique needs. From front-end development, creating stunning user interfaces, to back-end functionality ensuring robust performance, we cover the entire spectrum of web programming.',
    },
    {
      imageUrl: 'https://www.saveeat.co/wp-content/uploads/2020/02/attirer-les-clients.jpg',
      title: 'SEO',
      description: 'Elevate your online visibility and drive organic traffic with our comprehensive SEO Service. In todays digital landscape, being easily discoverable on search engines is imperative for business success. Our dedicated team of SEO experts is committed to optimizing your online presence, ensuring that your website ranks prominently on search engine results pages.',
    },
  ];
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
      {imageInfoArray.map((imageInfo, index) => (
        <ImageWithText
          key={index}
          imageUrl={imageInfo.imageUrl}
          title={imageInfo.title}
          description={imageInfo.description}
        />
      ))}
    </Container>

  );
};

export default Home;
