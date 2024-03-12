import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactImage from '../images/heroImage.jpg';

const ContactUsPage = styled('div')({
  background: `url(${ContactImage}) center/cover`,
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '30px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
});

const ContactInfo = styled('div')({
  marginBottom: '20px',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', 
});

const FormGroup = styled('div')({
  marginBottom: '20px',
  width: '100%', // Ensure form group takes full width
});

const InputField = styled(TextField)({
  width: '100%',
  marginBottom: '10px',
  '& label': {
    color: '#fff', // Label text color
    fontWeight: 'bold',
  },
  '& input, & textarea': {
    color: '#fff', // Input text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff', 
    },
    '&:hover fieldset': {
      borderColor: '#fff', 
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff', 
    },
  },
});

const SubmitButton = styled(Button)({
  width: '100%',
  marginTop: '20px',
});

function Contact() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleDialogClose = () => {
    setOpenDialog(false);
    setFormData({ name: '', email: '', message: '' }); // Reset form data
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  return (
    <div style={{marginTop:'40px'}}>
      <h1 style={{ padding: '20px 10px', color: '#FFFAF0', backgroundColor: '#4E342E', textAlign: 'center' }}>Contact Us</h1>
      <Container style={{ display: 'flex', justifyContent: 'center', height: '90vh'}}>
        <ContactUsPage>
          <ContactInfo>
            <Typography variant="h6">Contact Information:</Typography>
            <Typography variant="body1">Email: PIONG_PIANG@petstore.com</Typography>
            <Typography variant="body1">Phone: 0928 776 1321</Typography>
            <Typography variant="body1">Blk.275 lot 7 Governors Drive, Old Bulihan, Silang, Cavite, 3022</Typography>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <InputField
                label="Name"
                id="name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <InputField
                label="Email"
                id="email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <InputField
                label="Message"
                id="message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <SubmitButton variant="contained" color="primary" type="submit">
              Submit
            </SubmitButton>
          </ContactForm>
        </ContactUsPage>
      </Container>
      <Dialog open={openDialog} onClose={handleDialogClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Thank You!</DialogTitle>
        <DialogContent>
          <Typography>Your message has been received. We will get back to you soon.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;









