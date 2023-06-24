import React, { useState } from 'react';
//import { makeStyles } from "@mui/styles";
import { Button, Modal, TextField, Grid, Paper } from '@material-ui/core';
import axios from "axios";
import qs from 'qs'; 
 
export default function Edit({arrIds}) {
  
  const [open, setOpen] = useState(false);
  const [orderCurrency, setOrderCurrency] = useState("");
  const [distributionChannel, setDistributionChannel] = useState("");
  const [companyCode, setCompanyCode] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const data = {
      Sl_no : arrIds[0], 
      order_currency: orderCurrency,
      distribution_channel: distributionChannel,
      company_code: companyCode,
    };

    console.log(data);
    // axios.post("http://localhost:8081/HrcBackend/edit", data)
    //   .then(response => {
    //     console.log('Update successful', response);
    //     handleClose();
    //   })
    //   .catch(error => {
    //     console.error('Error updating data', error);
    //     console.log(error);
    //   });

    const options={
      method: 'POST',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: qs.stringify(data),
      url: "http://localhost:8081/HrcBackend/edit"
    }

    axios(options).catch(error => {
      console.log(error.response.data);
    });
  

    handleClose();
  };

  // const handleRowSelection = (slNo) => {
  //   setSelectedSlNo(slNo);
  // };
//console.log(typeof(arrIds))
//console.log(jsonString)
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "#fc7500",
          marginRight: "10px",
        }}
        // disabled={!selectedSlNo} // Disable button if no row is selected
      >
        Edit
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: '#fff', border: '3px solid black', padding: 16 }}>
          <span style={{ color: "Black", fontSize: "20px" }}>
            Edit
          </span>
          <div className="form-container" >

            <Grid
              container
              spacing={2}
              sx={{ paddingTop: "30px", marginLeft: "5px" }}
            >
              <Grid item xs={6}>
                <TextField
                  style={{ marginTop: "10px" }}
                  id="order_currency"
                  label="ORDER CURRENCY"
                  variant="outlined"
                  sx={{ background: "white", borderRadius: "10px", width: "100%" }}
                  value={orderCurrency}
                  onChange={(newValue) => setOrderCurrency(newValue.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{ marginTop: "10px" }}
                  id="company_code"
                  label="COMPANY CODE"
                  variant="outlined"
                  sx={{ background: "white", borderRadius: "10px", width: "100%" }}
                  value={companyCode}
                  onChange={(newValue) =>
                    setCompanyCode(newValue.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="distribution_channel"
                  label="DISTRIBUTION CHANNEL"
                  variant="outlined"
                  sx={{ background: "white", width: "100%" }}
                  value={distributionChannel}
                  onChange={(newValue) => setDistributionChannel(newValue.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ color: "black", border: "1px solid black", backgroundColor: "white", marginRight: "10px", marginTop: "9px", width: "45%" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              style={{ color: "black", border: "1px solid black", backgroundColor: "white", marginRight: "10px", marginTop: "9px", width: "50%" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

