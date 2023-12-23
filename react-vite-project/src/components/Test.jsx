import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import CardsBaskets from "./CardsFBaskets/CardsBaskets";
import CardsVases from './CardVases/CardVases';
import Footer from './Footer/Footer';

const defaultTheme = createTheme();
export default function Test() {

    return( 
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar />
                <Header />
                <Cards />
                <CardsBaskets />
                <CardsVases />
                <Footer />
            </Container>
        </ThemeProvider>
    );

}


