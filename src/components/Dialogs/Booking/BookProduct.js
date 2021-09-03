import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
//material-ui core
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
//icons & style
import {styles} from "../../../assets/materialStyle/components/Booking/BookProduct";
//redux
import {
  setOpenBookProduct,
  setOpenBookPrice,
} from "../../../store/components/products/productActions";
import {connect} from "react-redux";

const useStyles = makeStyles(styles)

function BookProduct(props) {
  const classes = useStyles()
  const {
    openBookProduct, setOpenBookProduct,
    setOpenBookPrice,
  } = props;
  let [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
  let [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (data) => {
    setSelectedEndDate(data)
  }
  const handleClose = () => {
    setOpenBookProduct();
  };
  const handlePrice = () => {
    setOpenBookPrice()
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openBookProduct}>
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
          <span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </span>
          <span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </span>
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
    openBookProduct: components.products.openBookProduct,
  };
};

const mapDispatchToProps = {
  setOpenBookProduct,
  setOpenBookPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(BookProduct);