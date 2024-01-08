import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/material';
import '@fontsource/sevillana';
import Cards from '../Cards/Cards';
import { styled } from '@mui/system';
import { allData, dataType } from '../../mocks/data';

const StyledTitle = styled('h5')({
    fontFamily: 'Sevillana, sans-serif',
    fontSize: '3rem',
    color: '#DE85A4',
    marginTop: '80px',
    marginBottom: '80px',
});

const useMockDataQuery = (dataTypeKey) => {
    return useQuery({
        queryKey:['allData', dataTypeKey],
        queryFn: async () => {
            try {
                const data = allData[dataTypeKey];
                if (!data) {
                    throw new Error(`Data type not found: ${dataTypeKey}`);
                }
                return data;
            } catch (error) {
                throw new Error(`Error fetching data: ${error.message}`);
            }
        },
    });
};

function CardsTypes() {
    const {
        data: bouquetData
    } = useMockDataQuery(dataType.bouquet);

    const {
        data: basketData
    } = useMockDataQuery(dataType.basket);

    const { data: boxData
    } = useMockDataQuery(dataType.box);


    if (!bouquetData || !basketData || !boxData) {
        return <p>Data not available</p>;
    }

    return (
        <>
            <Box position="static" sx={{ flexGrow: 1 }}>
                <StyledTitle>{bouquetData.title}</StyledTitle>
                <Cards Data={bouquetData.data} />
            </Box>

            <Box position="static" sx={{ flexGrow: 1 }}>
                <StyledTitle>{basketData.title}</StyledTitle>
                <Cards Data={basketData.data} />
            </Box>

            <Box position="static" sx={{ flexGrow: 1 }}>
                <StyledTitle>{boxData.title}</StyledTitle>
                <Cards Data={boxData.data} />
            </Box>
        </>
    );
}

export default CardsTypes;

