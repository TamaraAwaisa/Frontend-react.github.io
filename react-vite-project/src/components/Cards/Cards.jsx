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
import PropTypes from 'prop-types';

const imgStyle = {
    height: '450px',
    maxWidth: '330px',
};

const buttonStyle ={
    color: 'wight',
    fontWeight: '600',
    backgroundColor: '#DE85A4',
};

function Cards({Data}) {
    return (
        <>
        <Box position="static" sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>   
                {Data.map((card) => (
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
Cards.propTypes = {
    Data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Cards;
