import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const FeatureCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: '#FFFAF0', // Background color
}));

const FeatureCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1, // Ensure content takes full height
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  '& > span': {
    fontSize: 48,
    marginBottom: theme.spacing(2),
  },
}));

const ColoredIcon = styled('span')(({ theme, iconColor }) => ({
  color: iconColor,
}));

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h1 style={{ padding: '20px 10px', color: '#FFFAF0', backgroundColor: '#4E342E', textAlign: 'center' }}>About Us</h1>
      <Typography variant="h2" align="center" gutterBottom style={{margin: '40px 0px 50px 0px'}} sx={{ color: '#4E342E', fontWeight: 'semiBold', '@media (max-width:600px)': { fontSize: '2rem', margin: '20px 0' } }}>
        Welcome to Piong-Piang: Your Pet's Ultimate Catalogue!
      </Typography>
      <Typography variant="body1" paragraph style={{ marginBottom: '40px' }}>
        Piong-Piang is your go-to destination for all things pet-related. Since 2015, we've been committed to providing pet owners with a seamless shopping experience, offering a wide range of products to meet every pet's needs.
      </Typography>

      <Grid container spacing={3} style={{marginBottom: '40px'}}>
        <Grid item xs={12} sm={6} md={3} sx={{'@media (max-width:600px)': {marginBottom: '30px'}}}>
          <FeatureCard>
            <FeatureIcon>
              <ColoredIcon iconColor="#F06292">
                <PetsIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Extensive Selection
              </Typography>
              <Typography variant="body2">
                From premium foods and treats to stylish accessories and cozy beds, we have it all for your furry, feathered, or scaly friend.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{'@media (max-width:600px)': {marginBottom: '30px'}}}>
          <FeatureCard>
            <FeatureIcon>
              <ColoredIcon iconColor="#BA68C8">
                <FavoriteIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Quality Assurance
              </Typography>
              <Typography variant="body2">
                We partner with trusted brands to ensure the highest standards of safety and happiness for your pet.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{'@media (max-width:600px)': {marginBottom: '30px'}}}>
          <FeatureCard>
            <FeatureIcon>
              <ColoredIcon iconColor="#64B5F6">
                <StorefrontIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Expert Guidance
              </Typography>
              <Typography variant="body2">
                Our team of pet enthusiasts is here to provide personalized recommendations for your pet's well-being.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <FeatureCard>
            <FeatureIcon>
              <ColoredIcon iconColor="#81C784">
                <LocalOfferIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Convenience
              </Typography>
              <Typography variant="body2">
                Shop with ease from our user-friendly website and enjoy doorstep delivery.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }} style={{marginBottom: '40px'}}>
        <Grid item xs={12} sm={4} sx={{'@media (max-width:600px)': {marginBottom: '30px'}}}>
          <FeatureCard>
          <FeatureIcon>
              <ColoredIcon iconColor="#BA68C8">
                <FavoriteIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Customer Satisfaction
              </Typography>
              <Typography variant="body2">
                We are dedicated to providing exceptional service that leaves you smiling.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={4} sx={{'@media (max-width:600px)': {marginBottom: '30px'}}}>
          <FeatureCard>
          <FeatureIcon>
              <ColoredIcon iconColor="#F06292">
                <PetsIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Pet Happiness
              </Typography>
              <Typography variant="body2">
                Your pet's joy is our priority, with products that promote health and comfort.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FeatureCard>
            <FeatureIcon>
              <ColoredIcon iconColor="#64B5F6">
                <StorefrontIcon />
              </ColoredIcon>
            </FeatureIcon>
            <FeatureCardContent>
              <Typography variant="h5" gutterBottom>
                Community Involvement
              </Typography>
              <Typography variant="body2">
                We support local shelters and rescue organizations to help pets find loving homes.
              </Typography>
            </FeatureCardContent>
          </FeatureCard>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph style={{ textAlign: 'center', margin: '80px 0px 30px 0px'}} >
        Thank you for choosing Piong-Piang as your trusted partner in pet care. Let's make every moment with your pet a happy one!
      </Typography>
      <Typography variant="body1" align="center" style={{marginBottom: '40px'}}>
        <em>Let's make tails wag and hearts sing at Piong-Piang!</em>
      </Typography>
    </Container>
  );
}

export default About;












