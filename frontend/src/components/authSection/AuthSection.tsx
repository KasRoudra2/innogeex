import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./AuthSection.scss";

const AuthSection = () => {
  return (
    <div>
        <Container>
            <Typography variant="h3" component="h1" gutterBottom mt={3}>Innovate Today</Typography>
            <Typography variant="h6" component="h1" gutterBottom>Explore the nexus of innovation</Typography>
        </Container>
    </div>
  )
}

export default AuthSection;