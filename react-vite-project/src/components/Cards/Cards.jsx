import { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShowMore from '../CardShowMore/ShowMore';
import '@fontsource/sevillana';

export default class Cards extends Component {
    render() {
        const imgStyle = {
            height: '450px',
            maxWidth: '330px',
        };
        
        const buttonStyle ={
            color: 'wight',
            fontWeight: '600',
            backgroundColor: '#DE85A4',
        };

        const CardTitelStyle = {
            fontFamily: 'Sevillana, sans-serif',
            fontSize: '3rem',
            color: '#DE85A4',
        };
        const data = [
            { id: 1, title: 'Card 1', content: 'Content for card 1', price: '123$', imageUrl: '/src/assets/f1.jpg' },
            { id: 2, title: 'Card 2', content: 'Content for card 2', price: '123$', imageUrl: '/src/assets/f2.jpg' },
            { id: 3, title: 'Card 3', content: 'Content for card 3', price: '123$', imageUrl: '/src/assets/f3.jpg' },
            { id: 4, title: 'Card 4', content: 'Content for card 4', price: '123$', imageUrl: '/src/assets/f4.jpg' },
            { id: 5, title: 'Card 5', content: 'Content for card 5', price: '123$', imageUrl: '/src/assets/f5.jpg' },
            { id: 6, title: 'Card 6', content: 'Content for card 6', price: '123$', imageUrl: '/src/assets/f6.jpg' },
        ];
        return (
            <>
            <Box position="static" sx={{ flexGrow: 1 }}>
                <h5 style={CardTitelStyle}>Flower Bouquets</h5>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>   
                    {data.map((card) => (
                        <Grid item xs={2} md={4} key={card}>
                            <Card key={card.id} sx={{ maxWidth: 330 }}>
                                <CardMedia
                                    style={imgStyle}
                                    component="img"
                                    alt={card.title}
                                    image={card.imageUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {card.content}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {card.price}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                                    <ShowMore />
                                    <Button style={buttonStyle} variant="contained" size="small" >Add to cart</Button>
                                </CardActions>
                            </Card> 
                        </Grid>
                    ))}
                </Grid>
            </Box>
            </>
        )
    }
}
