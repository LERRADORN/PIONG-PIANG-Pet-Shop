
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useMediaQuery,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';


function Fish() {
  const [fish, setFish] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const isLargeScreen = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    fetchAllFish();
  }, [])

  const fetchAllFish = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/fish");
      setFish(response.data); // Changed to setFish
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/fish?search=${searchTerm}`);
      if (response.data.length === 0) {
        setIsModalOpen(true); // Open modal if no products found
      } else {
        setFish(response.data); // Changed to setFish
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  }

  return (
    <div style={{ textAlign: 'center', margin: isLargeScreen ? '30px 100px 40px 100px' : '20px' }}>
        <div  style={{ backgroundColor: '#4E342E' }}>
            <h1 style={{ padding: '20px 0px 3px 0px', color: '#FFFAF0' }}>Fish Products</h1>
                    <div style={{ marginBottom: '20px', padding: '18px', backgroundColor: '#FFFAF0'}}>
                        <div style={{ display: 'inline-block', marginLeft: '20px', margin: '10px' }}>
                        <TextField style={{backgroundColor: '#FFFAF0', borderRadius: '10px'}}
                            label="Search Products"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleSearch} style={{ margin: '10px 20px' }}>
                            Search
                        </Button>
                        <Button variant="contained" onClick={fetchAllFish} style={{ marginLeft: '10px 20px' }}>
                            Show All
                        </Button>
                        </div>
                    </div>
        </div>
      <br />
      <Grid container spacing={4} justifyContent="center">
        {fish.map((fishItem) => (
          <Grid item key={fishItem.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFAF0' }}>
              <CardMedia
                component="img"
                height={isLargeScreen ? "200" : "100"}
                image={`http://localhost:8000/images/${fishItem.img}`}
                style={{ objectFit: 'contain' }}
                alt=""
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {fishItem.name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {fishItem.description}
                </Typography>
                <br />
                <Typography variant="body2" color="text.primary" style={{ fontWeight: 600 }}>
                  Price: {fishItem.price}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary" style={{ fontWeight: 550 }}>
                  Stock: {fishItem.stock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Product Not Found Modal */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Product Not Found</DialogTitle>
        <DialogContent>
          <Typography variant="body1">"Stay tuned for exciting updates! We're working to bring this product to you soon. Thank you for your interest and patience."</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Fish;
