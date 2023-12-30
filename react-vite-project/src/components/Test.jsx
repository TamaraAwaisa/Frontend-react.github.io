import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import CardsTypes from './CardsTypes/CardsTypes'

const defaultTheme = createTheme();
function Test() {
    return( 
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar />
                <Header />
                <CardsTypes />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}
export default Test;


