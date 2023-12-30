import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '@fontsource/sevillana';
import Cards from '../Cards/Cards';
import Data2 from '../Data/Data2'

const CardTitelStyle = {
    fontFamily: 'Sevillana, sans-serif',
    fontSize: '3rem',
    color: '#DE85A4',
    marginTop: '80px',
    marginBottom: '80px',
};

const Title2 = 'Flower Baskets';

function CardsBaskets() {

    return (
        <>
        <Box position="static" sx={{ flexGrow: 1 }}>
            <Typography variant='h5' style={CardTitelStyle}>
                {Title2}
            </Typography>
            <Cards Data={Data2}/>
        </Box>
        </>
    )
}
export default CardsBaskets;
