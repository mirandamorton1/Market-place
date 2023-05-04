import React from 'react';
import scss from './Dashboard.module.scss'
import {Box, Card, Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
  


const Dashboard = () => {
    return (
        <Box>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={products}
                sx={{ 
                    width: 300,
                    display: 'inline-block', 
                    marginBottom: '40px'
                }}
                renderInput={(params) => <TextField {...params} label="Search Products" />}
            />
            <ButtonGroup variant="text" aria-label="text button group" color="inherit"
            sx={{
                display: 'inline-block'
              }}
            >
                <Button>Orders</Button>
                <Button>Chat</Button>
                <Button>Cart</Button>
            </ButtonGroup> 
            <Divider 
             sx={{  
                marginBottom: '40px'
            }}/>
            <Typography variant="h4" sx={{ marginBottom: '20px'}}>
                Popular Prodcucts | New Arrivals
            </Typography>
            <Card sx={{ 
                maxWidth: 345,
                display: 'inline-block',
                marginRight: '20px' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/rice.jpg"
                    title="rice"
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Rice | May 4, 2023
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Category Name
                    </Typography>
                    <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
             </CardContent>
                <CardActions>
                <Button size="small" color="inherit" >Contact for Price
                </Button>
                <Button size="small" color="inherit">Farm Page</Button>
                </CardActions>
             </Card>
             <Card sx={{ maxWidth: 345, 
                display: 'inline-block',
                marginRight: '20px' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/food.jpg"
                    title="food"
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Other Food | May 4, 2023
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Category Name
                    </Typography>
                    <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
             </CardContent>
                <CardActions>
                <Button size="small" color="inherit" >Contact for Price
                </Button>
                <Button size="small" color="inherit">Farm Page</Button>
                </CardActions>
             </Card>
             <Divider 
             sx={{  
                marginBottom: '40px'
            }}/>
            <Typography variant="h4" sx={{ marginBottom: '20px'}}>
                Featured Products
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/beans.jpg"
                    title="beans"
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Beans | May 4, 2023
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Category Name
                    </Typography>
                    <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                    </Stack>
             </CardContent>
                <CardActions>
                <Button size="small" color="inherit" >Contact for Price
                </Button>
                <Button size="small" color="inherit">Farm Page</Button>
                </CardActions>
             </Card>
        </Box>
    )

};


const products = [
    { label: 'Rice' },
    { label: 'Sesame'},
    { label: 'Beans' },
    { label: 'Bananas' },
  ];


export default Dashboard;