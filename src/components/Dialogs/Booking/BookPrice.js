import React from "react";
//material-ui core
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";
//icons & style
import {styles} from "../../../assets/materialStyle/components/Booking/BookPrice";
//redux
import {
  cancelProduct,
  setConfirmBookPrice,
  setCancelBookPrice,
} from "../../../store/components/products/productActions";
import {connect} from "react-redux";

const useStyle = makeStyles(styles)

function BookPrice(props) {
  const classes = useStyle()
  const {
    openBookPrice,
    setCancelBookPrice,
    setConfirmBookPrice,
    cancelProduct
  } = props;
  const handleCancel = () => {
    cancelProduct()
  }
  const handleYes = () => {
    setConfirmBookPrice()
  }
  const handleNo = () => {
    setCancelBookPrice()
  };
  return (
    <Dialog onClose={handleCancel} aria-labelledby="simple-dialog-title" open={openBookPrice}>
      <DialogTitle id="simple-dialog-title">
        Your estimated price is {props.price}
        Do you want to procedure?
        <div>
          <span>
            <Button className={classes.button} onClick={handleNo}>
              No
            </Button>
          </span>
          <span>
            <Button className={classes.button} onClick={handleYes}>
              Yes
            </Button>
          </span>
        </div>
      </DialogTitle>
    </Dialog>
  );
}

const mapStateToProps = ({components}) => {
  return {
    openBookPrice: components.products.openBookPrice,
  };
};

const mapDispatchToProps = {
  cancelProduct,
  setConfirmBookPrice,
  setCancelBookPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPrice);