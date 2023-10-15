import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import Header from './Header';

const ContactUs = (props) => {
  return (
    <div>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '60px' }}>
        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Contact Us
                        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Use the email below to contact the BurnOut development team. It's a group mailbox that is accessed by the core team. Feel free to reach out to us for any questions, feedback, or inquiries related to our application.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Email: <Link href="mailto:test@gmail.edu">test@gmail.edu</Link>
        </Typography>
        <Typography variant="h6" color="text.secondary" style={{ marginTop: '20px' }}>
          We will respond to you as soon as we can!
        </Typography>
      </Container>
    </div>
  );
};

export default ContactUs;
