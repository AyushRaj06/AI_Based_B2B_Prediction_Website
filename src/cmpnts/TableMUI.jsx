import React, { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import Delete from "./Delete";
import Edit from "./Edit";
import axios from 'axios';
// const[arrIds,setArrIds] = useState([]);
// export  {arrIds};
// export const[arrIds,setArrIds] = useState([]);



const columns = [
  { field: 'sl_no', headerName: 'Sl No' ,width: 150},
  { field: 'customer_order_id', headerName: 'Customer Order ID', width: 200 },
  { field: 'sales_org', headerName: 'Sales Org', width: 200 },
  { field: 'distribution_channel', headerName: 'Distribution Channel', width: 300 },
  // { field: 'division', headerName: 'Division', width: 600 },
  // { field: 'released_credit_value', headerName: 'Released Credit Value', width: 600 },
  // { field: 'purchase_order_type', headerName: 'Purchase Order Type', width: 600 },
  { field: 'company_code', headerName: 'Company Code', width: 200 },
  { field: 'order_creation_date', headerName: 'Order Creation Date', width: 200 },
  // { field: 'order_creation_time', headerName: 'Order Creation Time', width: 600 },
  // { field: 'credit_control_area', headerName: 'Credit Control Area', width: 600 },
  // { field: 'sold_to_party', headerName: 'Sold to Party', width: 600 },
  { field: 'order_amount', headerName: 'Order Amount', width: 200 },
  // { field: 'requested_delivery_date', headerName: 'Requested Delivery Date', width: 600 },
  { field: 'order_currency', headerName: 'Order Currency', width: 200 },
  // { field: 'credit_status', headerName: 'Credit Status', width: 600 },
  { field: 'customer_number', headerName: 'Customer Number', width: 300 },
  { field: 'amount_in_usd', headerName: 'Amount in USD', width: 600 },
  // { field: 'unique_cust_id', headerName: 'Unique Customer ID', width: 600 },
 
]

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.01em",
      height: "1.1em",
    },

    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 100px rgba(0,0,0,0.00)",
    },

    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#575757",
      borderRadius: "6px",
    },
  },

  butt: {
    backgroundColor: " #666666",
    marginLeft: "10px",
    marginTop: "-45px",
    display: "flex",
    justifyContent: "left",
  },
  container: {
    margin: "100px",
    padding: "1px",
    marginLeft: "12px",
    marginRight: "5px",
    "& .MuiDataGrid-root": {
      marginRight:"-210px",
      marginTop:"-20px",
    }
  },
  columnHeader: {
    outline: "none",
  },

  root: {
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiDataGrid-root": {
      marginRight:"-100px",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiCheckbox-root": {
      color: "white",
    },
    "& .MuiCheckbox-root.Mui-checked": {
      color: "#FC7500",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus-within":
      {
        outline: "none !important",
      },
  },
}));

export default function TableMUI() {
  const classes = useStyles();

  const [selectedRows, setSelectedRows] = useState([]);
  const [tableData, setTableData] = useState([])
    useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      axios.get("http://localhost:8081/HrcBackend/readdata").then((response) => setTableData(response.data))
        // .then((data) => data.json())
        // .then((data) => setTableData(data))
  
    }, [])

    //const [open, setOpen] = useState(false);
    const[arrIds,setArrIds] = useState([]);

    // function child (){
    //   return (
    //     {ids}
    //   );
    // }
    
    const handleRefresh = async () => {
      try{
        const {data}= await axios.get("http://localhost:8081/HrcBackend/readdata",{
          header :{
            Accept: 'application/json',
          },
        });
  
        console.log(data);
  
        setTableData(data);
      }catch(err){
        console.log(err);
      }
  
    }
  

  const handleRowClick = (params) => {
    const selectedRowIds = selectedRows.map((row) => row.id);

    if (selectedRowIds.includes(params.id)) {
      setSelectedRows(selectedRows.filter((row) => row.id !== params.id));
    } else {
      setSelectedRows([...selectedRows, params.row]);
    }
  };

  const isCellSelected = (params) => {
    const selectedRowIds = selectedRows.map((row) => row.id);
    return selectedRowIds.includes(params.id);
  };

  return (

    <div className={classes.container} style={{ height: 500, width: "1300px" }}>
      <DataGrid
        classes={{
          root: classes.root,
          columnHeader: classes.columnHeader,
        }}
        style={{
          backgroundColor: "#666666",
          color: "#FFFFFF",
        }}
        getRowId={(row) => row.sl_no}
        rows={tableData}
        columns={columns}
        checkboxSelection
        hideFooterSelectedRowCount
        scrollbarSize={10}
        isCellSelected={isCellSelected}
        onRowClick={handleRowClick}
        onSelectionModelChange={(ids) => {
          console.log(ids);
          setArrIds(ids);
        }}
      />

      <div className={classes.butt}>
        <ButtonGroup>
          <Button
          onClick={handleRefresh}
            style={{
              color: "white",
              backgroundColor: "#fc7500",
              marginRight: "10px",
            }}
            variant="contained"
          >
            REFRESH DATA
          </Button>
         <Edit arrIds={arrIds}/>
          <Delete arrIds={arrIds} />
          <Button
            style={{ color: "white", backgroundColor: "#fc7500" }}
            variant="contained"
          >
            PREDICT
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
export { default as arrIds } from './TableMUI';

