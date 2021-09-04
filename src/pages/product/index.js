import React from 'react'
//core components
import MaterialTable from "material-table";
import BookProduct from "../../components/Dialogs/Booking/BookProduct";
import BookPrice from "../../components/Dialogs/Booking/BookPrice";
import ReturnProduct from "../../components/Dialogs/Returning/ReturnProduct";
import ReturnPrice from "../../components/Dialogs/Returning/ReturnPrice";
//material-ui core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//icons & style
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import SearchIcon from '@material-ui/icons/Search';
import {styles} from "../../assets/materialStyle/pages/product/product";
//redux
import {
  getProducts,
  setOpenBookProduct,
  setOpenReturnProduct
} from "../../store/components/products/productActions";
import {connect} from "react-redux";

const useStyles = makeStyles(styles)

function Products(props) {
  const classes = useStyles()
  let {
    products, getProducts,
    setOpenBookProduct,
    setOpenReturnProduct
  } = props
  React.useEffect(() => {
    getProducts()
  }, [])
  React.useEffect(() => {
    console.log( JSON.parse(products), "cds")
  }, [products])
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Code",
      field: "code",
    },
    {
      title: "Availability",
      field: "availability"
    },
    {
      title: "Need to repair",
      field: "needing_repair"
    },
    {
      title: "Durability",
      field: "durability"
    },
    {
      title: "Mileage",
      field: "mileage"
    }
  ];
  return (
    <>
      <Card>
        <CardContent className={classes.card}>
          {JSON.parse(products).length > 0 && (
            <MaterialTable
              title={null}
              data={JSON.parse(products)}
              columns={columns}
              options={{
                paging: false,
                search: true,
                sorting: true,
              }}
              icons={{
                SortArrow: React.forwardRef((props, ref) => (
                  <UnfoldMoreIcon className={classes.arrowIcon}/>
                )),
                Search: React.forwardRef((props, ref) => (
                  <SearchIcon className={classes.arrowIcon}/>
                )),
                ResetSearch: React.forwardRef((props, ref) => (
                  <></>
                )),
              }}
            />
          )}
          <Button className={classes.button} onClick={setOpenBookProduct}>
            Books
          </Button>
          <Button className={classes.button} onClick={setOpenReturnProduct}>
            Return
          </Button>
        </CardContent>
      </Card>
      <>
        <BookProduct/>
        <BookPrice/>
      </>
      <>
        <ReturnProduct/>
        <ReturnPrice/>
      </>
    </>
  )
}

const mapStateToProps = ({components}) => {
  return {
    products: components.products.products,
  };
};

const mapDispatchToProps = {
  getProducts,
  setOpenBookProduct,
  setOpenReturnProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);