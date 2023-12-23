import { Container, Typography } from '@mui/material'
import { Component } from 'react'

export default class Footer extends Component {
    render() {
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
}
