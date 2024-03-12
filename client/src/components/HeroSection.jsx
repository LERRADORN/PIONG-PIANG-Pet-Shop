import { Link } from 'react-router-dom';
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeroImage from '../images/heroImage.jpg'

export function HeroSection() {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundImage: `url(${HeroImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#b3d334',
        color: '#ffffff',
        padding: '50px 20px', // Adjusted padding
        height: '55vh',
        overflow: 'hidden', // Prevent content from overflowing
        padding: '100px 0px 100px 0px'
      }}
    >
       {/* Original text content - Hidden on small screens */}
       <Container maxWidth="sm"
        sx={{
          display: 'block',
          textAlign: 'left',
          order: { xs: 2, md: 1 },
          marginBottom: { xs: '20px', md: 0 },
          '@media (max-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#EAE0C8', fontWeight: 'bold'}}>
          Welcome to Our Online Petstore!
        </Typography>
        <br />
        <Typography variant="body1" paragraph sx={{ color: '#EAE0C8', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
          Explore a curated collection of top-quality pet essentials - from nutritious foods to trendy accessories. Whether you have a playful pup, curious cat, or loyal companion, find everything to keep them happy and healthy.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#EAE0C8', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
          Find the best for your pet, because their joy is our priority!
        </Typography>
        <br />
        <Button variant="contained" color="primary" size="large">
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>View Products</Link>
        </Button>
      </Container>
      
      {/* Centered text content - Visible on small screens */}
      <Container maxWidth="sm"
        sx={{
          display: 'none',
          textAlign: 'center',
          padding:'10px 20px',
          order: { xs: 1, md: 2 },
          marginBottom: { xs: '20px', md: 0 },
          '@media (max-width: 600px)': {
            display: 'block',
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#EAE0C8', fontWeight: 'bold', fontSize: { xs: '40px', md: '40px' } }}>
          Welcome to Our Online Petstore!
        </Typography>
        <br />
        <Typography variant="body1" paragraph sx={{ color: '#EAE0C8', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
          Explore a curated collection of top-quality pet essentials - from nutritious foods to trendy accessories. Whether you have a playful pup, curious cat, or loyal companion, find everything to keep them happy and healthy.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#EAE0C8', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
          Find the best for your pet, because their joy is our priority!
        </Typography>
        <br />
        <Button variant="contained" color="primary" size="small">
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>View Products</Link>
        </Button>
      </Container>
      
      <Container maxWidth="sm"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          order: { xs: 1, md: 2 },
        }}
      >
        {/* Image container */}
      </Container>
    </Box>
  );
};

export default HeroSection;

