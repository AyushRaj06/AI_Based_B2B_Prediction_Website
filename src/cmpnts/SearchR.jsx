import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import Delete from "./Delete";
import Edit from "./Edit";

const columns = [
  { field: "id", headerName: "SI No", width: 120 },
  { field: "CustomerOrderID", headerName: "CUSTOMER ORDER ID", width: 240 },
  { field: "SalesOrg", headerName: "SALES ORG", type: "number", width: 160 },
  {
    field: "DistributionChannel",
    headerName: "DISTRIBUTION CHANNEL",
    width: 290,
  },
  {
    field: "ComapanyCode",
    headerName: "COMPANY CODE",
    type: "number",
    width: 200,
  },
  {
    field: "OrderCreationDate",
    headerName: "ORDER CREATION DATE",
    width: 250,
  },
  {
    field: "OrderAmount",
    headerName: "ORDER AMOUNT",
    type: "number",
    width: 200,
  },
  {
    field: "OrderCurrency",
    headerName: "ORDER CURRENCY",
    width: 220,
  },
  {
    field: "CustomerNumber",
    headerName: "CUSTOMER NUMBER",
    type: "number",
    width: 230,
  },
  {
    field: "AmountInUSD",
    headerName: "AMOUNT IN USD",
    type: "number",
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    CustomerOrderID: "754349803",
    SalesOrg: 3911,
    DistributionChannel: "United Arab Emirates",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 1405.54,
    OrderCurrency: "AED",
    CustomerNumber: 1210499770,
    AmountInUSD: 234.23,
  },
  {
    id: 2,
    CustomerOrderID: "930253442",
    SalesOrg: 2381,
    DistributionChannel: "Greece",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 1441.4835,
    OrderCurrency: "EUR",
    CustomerNumber: 1210351400,
    AmountInUSD: 534.23,
  },
  {
    id: 3,
    CustomerOrderID: "819741436",
    SalesOrg: 3605,
    DistributionChannel: "Argentina",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 1065.33,
    OrderCurrency: "EUR",
    CustomerNumber: 1210124309,
    AmountInUSD: 334.78,
  },
  {
    id: 4,
    CustomerOrderID: "881355361",
    SalesOrg: 3645,
    DistributionChannel: "Armenia",
    ComapanyCode: 3470,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 302.85,
    OrderCurrency: "EUR",
    CustomerNumber: 12311152,
    AmountInUSD: 532.88,
  },
  {
    id: 5,
    CustomerOrderID: "821659852",
    SalesOrg: 2470,
    DistributionChannel: "United States of America",
    ComapanyCode: 3220,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 8380.69,
    OrderCurrency: "EUR",
    CustomerNumber: 1230021722,
    AmountInUSD: 232.89,
  },
  {
    id: 6,
    CustomerOrderID: "957194828",
    SalesOrg: 3150,
    DistributionChannel: "United States Minor Outlying Islands",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 545.85,
    OrderCurrency: "EUR",
    CustomerNumber: 1210183107,
    AmountInUSD: 754.89,
  },
  {
    id: 7,
    CustomerOrderID: "806322513",
    SalesOrg: 3396,
    DistributionChannel: "Serbia",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 545.85,
    OrderCurrency: "EUR",
    CustomerNumber: 1210499770,
    AmountInUSD: 232.56,
  },
  {
    id: 8,
    CustomerOrderID: "922237131",
    SalesOrg: 2353,
    DistributionChannel: "Turks and Caicos Islands",
    ComapanyCode: 3290,
    OrderCreationDate: "01-01-2022",
    OrderAmount: 562.73,
    OrderCurrency: "EUR",
    CustomerNumber: 1210111951,
    AmountInUSD: 876.54,
  },
];

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
    backgroundColor: "#666666",
    marginLeft: "10px",
    marginTop: "-45px",
    display: "flex",
    justifyContent: "left",
  },
  container: {
    margin: "100px",
    padding: "1px",
    marginLeft: "4px",
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
          border:"none",
        }}
        
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooterSelectedRowCount
        scrollbarSize={10}
        isCellSelected={isCellSelected}
        onRowClick={handleRowClick}
      />

      <div className={classes.butt}>
        <ButtonGroup>
          <Button
            style={{
              color: "white",
              backgroundColor: "#fc7500",
              marginRight: "10px",
            }}
            variant="contained"
          >
            REFRESH DATA
          </Button>
         <Edit />
          <Delete />
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
