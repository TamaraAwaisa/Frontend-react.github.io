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

const imgStyle = {
    height: '450px',
    maxWidth: '330px',
};

const buttonStyle ={
    color: 'wight',
    fontWeight: '600',
    backgroundColor: '#DE85A4',
};

const data = [
    { id: 1, title: 'Card 1', content: 'Content for card 1', price: '123$', imageUrl: '/src/assets/f1.jpg' },
    { id: 2, title: 'Card 2', content: 'Content for card 2', price: '123$', imageUrl: '/src/assets/f2.jpg' },
    { id: 3, title: 'Card 3', content: 'Content for card 3', price: '123$', imageUrl: '/src/assets/f3.jpg' },
    { id: 4, title: 'Card 4', content: 'Content for card 4', price: '123$', imageUrl: '/src/assets/f4.jpg' },
    { id: 5, title: 'Card 5', content: 'Content for card 5', price: '123$', imageUrl: '/src/assets/f5.jpg' },
    { id: 6, title: 'Card 6', content: 'Content for card 6', price: '123$', imageUrl: '/src/assets/f6.jpg' },
    { id: 7, title: 'Card 7', content: 'Content for card 7', price: '123$', imageUrl: '/src/assets/f7.jpg' },
    { id: 8, title: 'Card 8', content: 'Content for card 8', price: '123$', imageUrl: '/src/assets/f8.jpg' },
    { id: 9, title: 'Card 9', content: 'Content for card 9', price: '123$', imageUrl: '/src/assets/f9.jpg' },
    { id: 10, title: 'Card 10', content: 'Content for card 10', price: '123$', imageUrl: '/src/assets/f10.jpg' },
    { id: 11, title: 'Card 11', content: 'Content for card 11', price: '123$', imageUrl: '/src/assets/f11.jpg' },
    { id: 12, title: 'Card 12', content: 'Content for card 12', price: '123$', imageUrl: '/src/assets/f12.jpg' },
    { id: 13, title: 'Card 13', content: 'Content for card 13', price: '123$', imageUrl: '/src/assets/f13.jpg' },
    { id: 14, title: 'Card 14', content: 'Content for card 14', price: '123$', imageUrl: '/src/assets/f14.jpg' },
    { id: 15, title: 'Card 15', content: 'Content for card 15', price: '123$', imageUrl: '/src/assets/f15.jpg' },
    { id: 16, title: 'Card 16', content: 'Content for card 16', price: '123$', imageUrl: '/src/assets/f16.jpg' },
    { id: 17, title: 'Card 17', content: 'Content for card 17', price: '123$', imageUrl: '/src/assets/f17.jpg' },
    { id: 18, title: 'Card 18', content: 'Content for card 18', price: '123$', imageUrl: '/src/assets/f18.jpg' },
];

function Cards() {
    return (
        <>
        <Box position="static" sx={{ flexGrow: 1 }}>
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
export default Cards;
