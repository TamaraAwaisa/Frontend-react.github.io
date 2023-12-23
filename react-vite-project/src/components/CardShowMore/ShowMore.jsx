import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ShowMore() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const buttonStyle ={
        color: '#DE85A4',
        borderColor: '#DE85A4',
    }
    return (
    <React.Fragment>
        <Button style={buttonStyle} size="small" variant="outlined" onClick={handleClickOpen}>
        Show More
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            {"See More About This Product?"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum eligendi laborum amet, accusamus excepturi sint.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} autoFocus>
            Add To Cart
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </React.Fragment>
    );
}
