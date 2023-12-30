import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '@fontsource/sevillana';
import Cards from '../Cards/Cards';
import Data3 from '../Data/Data3'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardTitle: {
        fontFamily: 'Sevillana, sans-serif',
        fontSize: '3rem',
        color: '#DE85A4',
        marginTop: '80px',
        marginBottom: '80px',
    },
});

const Title3 = 'Flower Box';

function CardsBox() {
    const classes = useStyles();
    return (
        <>
        <Box position="static" sx={{ flexGrow: 1 }}>
            <Typography variant='h5' className={classes.cardTitle}>
                {Title3}
            </Typography>
            <Cards Data={Data3}/>
        </Box>
        </>
    )
}
export default CardsBox;
