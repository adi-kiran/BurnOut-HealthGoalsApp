import React from 'react';
import { Container, Typography, Link, Divider } from '@mui/material';
import Header from './Header';

const ContactUs = (props) => {
  return (
    <div>
      <Header {...props}/>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Divider style={{ marginBottom: '20px' }} />
        <Typography variant="h4" component="div" style={{ textTransform: 'uppercase' }}>
          Contact the team
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Use the email below to contact the BurnOut development team. It's a group mailbox that is accessed by the core team. Feel free to reach out to us for any questions, feedback, or inquiries related to our application.
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Email: <Link href="mailto:test@gmail.edu">test@gmail.edu</Link>
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          We will respond to you as soon as we can!
        </Typography>
      </Container>
    </div>
  );
};

export default ContactUs;
