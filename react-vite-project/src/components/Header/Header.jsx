import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '@fontsource/sevillana';


const headerStyle = {
    backgroundImage: 'url("/src/assets/flower.jpg")',
    backgroundSize: 'cover',
    height: '500px',
};

const toolbarStyle = {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
};

const titleStyle = {
    color: 'white',
    fontFamily: 'Sevillana, sans-serif',
    fontSize: '6rem',
    paddingTop: '50px',
};

function Header(){
    return (
        <>
        <AppBar position="static" style={headerStyle}>
            <Toolbar style={toolbarStyle}>
                <Typography variant="h6" style={titleStyle} className='header-titel'>
                Flower Store
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Header;
