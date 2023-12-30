import { Box } from '@mui/material';
import '@fontsource/sevillana';
import Cards from '../Cards/Cards';
import Data1 from '../Data/Data1';
import Data2 from '../Data/Data2';
import Data3 from '../Data/Data3';
import { styled } from '@mui/system';

const StyledTitle = styled('h5')({
    fontFamily: 'Sevillana, sans-serif',
    fontSize: '3rem',
    color: '#DE85A4',
    marginTop: '80px',
    marginBottom: '80px',
});


const Title1 = 'Flower Bouquets';
const Title2 = 'Flower Baskets';
const Title3 = 'Flower Box';

function CardsTypes() {
    return (
        <>
        <Box position="static" sx={{ flexGrow: 1 }}>
            <StyledTitle>
                {Title1}
            </StyledTitle>
            <Cards Data={Data1}/>
        </Box>

        <Box position="static" sx={{ flexGrow: 1 }}>
            <StyledTitle>
                {Title2}
            </StyledTitle>
            <Cards Data={Data2}/>
        </Box>

        <Box position="static" sx={{ flexGrow: 1 }}>
            <StyledTitle>
                {Title3}
            </StyledTitle>
            <Cards Data={Data3}/>
        </Box>
        </>
    )
}
export default CardsTypes;
