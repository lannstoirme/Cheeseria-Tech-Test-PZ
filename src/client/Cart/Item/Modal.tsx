import React from 'react';

//Modal
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import { CartItemType } from '../../App';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
  };
  
const Modal = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
        See Item Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           {item}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {item.category}
          </DialogContentText>
           <DialogContentText>
            {item.description}
           </DialogContentText>
           <DialogContentText>
               ${item.price}
           </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
export default Modal;