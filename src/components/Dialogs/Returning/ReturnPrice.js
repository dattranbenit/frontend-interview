import React from "react";
//material-ui core
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Dialog, DialogTitle} from "@material-ui/core";
//icons & style
import {styles} from "../../../assets/materialStyle/components/Booking/BookPrice";
//redux
import {
  cancelProduct,
  setConfirmReturnPrice,
} from "../../../store/components/products/productActions";
import {connect} from "react-redux";

const useStyle = makeStyles(styles)

function ReturnPrice(props) {
  const classes = useStyle()
  const {
    openReturnPrice,
    cancelProduct,
    setConfirmReturnPrice,
  } = props;
  const handleCancel = () => {
    cancelProduct()
  }
  const handleConfirm = () => {
    setConfirmReturnPrice()
  }
  return (
    <Dialog onClose={handleCancel} aria-labelledby="simple-dialog-title" open={openReturnPrice}>
      <DialogTitle id="simple-dialog-title">
        Your estimated price is {props.price}
        Do you want to procedure?
        <div>
          <Button className={classes.button} onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </DialogTitle>
    </Dialog>
  );
}

const mapStateToProps = ({components}) => {
  return {
    openReturnPrice: components.products.openReturnPrice,
  };
};

const mapDispatchToProps = {
  cancelProduct,
  setConfirmReturnPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnPrice);