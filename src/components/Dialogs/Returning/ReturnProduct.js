import React from 'react'
//material-ui core
import {Dialog, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
//icons & style
import {styles} from "../../../assets/materialStyle/components/Booking/BookProduct";
//redux
import {
  setOpenReturnProduct,
  setOpenReturnPrice,
} from "../../../store/components/products/productActions";
import {connect} from "react-redux";

const useStyles = makeStyles(styles)

function ReturnProduct(props) {
  const classes = useStyles()
  const {
    openReturnProduct, setOpenReturnProduct,
    setOpenReturnPrice,
  } = props;
  const handleClose = () => {
    setOpenReturnProduct();
  };
  const handlePrice = () => {
    setOpenReturnPrice()
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openReturnProduct}>
      <DialogTitle id="simple-dialog-title">
        <div>
          {props.name}
        </div>
        <div>
          {props.rental}
        </div>
        <div>
          {props.mileage}
        </div>
        <div>
          {props.fix}
        </div>
        <div>
          {props.mileage !== null ? (
            <>Used Mileage</>
          ) : (
            <>No Mileage</>
          )}
        </div>
        <div>
          <span>
            <Button className={classes.button} onClick={handleClose}>
              No
            </Button>
          </span>
          <span>
            <Button className={classes.button} onClick={handlePrice}>
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
    openReturnProduct: components.products.openReturnProduct,
  };
};

const mapDispatchToProps = {
  setOpenReturnProduct,
  setOpenReturnPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnProduct);