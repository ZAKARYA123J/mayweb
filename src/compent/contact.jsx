// ContactPage.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
