import { Container, Typography } from '@mui/material';

function Footer() {
    
    const footerStyle = {
        color:'gray',
    }
    return (
        <>
        <footer style={{padding: '40px'}}>
            <Container maxWidth="md">
                <Typography variant='boody2' style={footerStyle}>
                    &copy;Flower Store.
                </Typography>
            </Container>
        </footer>
        </>
    )
}
export default Footer;
