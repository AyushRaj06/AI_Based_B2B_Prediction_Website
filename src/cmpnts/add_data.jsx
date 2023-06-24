import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

export default function AddData() {
  const [formData, setFormData] = useState({
    CUSTOMER_ORDER_ID: '',
    SALES_ORG: '',
    DISTRIBUTION_CHANNEL: '',
    COMPANY_CODE: '',
    ORDER_CREATION_DATE: '',
    ORDER_AMOUNT: '',
    ORDER_CURRENCY: '',
    CUSTOMER_NUMBER: '',
    AMOUNT_IN_USD: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {

    event.preventDefault();
  event.persist(); 
  axios.post("http://localhost:8080/HrcBackend/add", formData)
    .then((response) => {
      console.log(response);
      event.target.reset(); // Reset the form after a successful response
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleCancel = () => {
    setFormData({
      sl_no: '',
      customer_order_id: '',
      sales_org: '',
      distribution_channel: '',
      company_code: '',
      order_creation_date: '',
      order_amount: '',
      order_currency: '',
      customer_number: '',
      amount_in_usd: '',
    });
  };

  const inputStyle1 = {
    width : '47.5%',
    backgroundColor: 'white',
    border: 'none', 
    marginBottom: '2%',
    marginLeft: '2%',
    borderRadius: '5px'
  };

  const inputStyle2 = {
    width: '23.5%',
    backgroundColor: 'white',
    border: 'none',
    marginBottom: '2%',
    marginLeft: '1%', 
    borderRadius: '5px'
  };

  const inputStyle3 = {
    width: '14.5%',
    backgroundColor: 'white',
    border: 'none', 
    marginBottom: '2%',
    marginLeft: '2%', 
    borderRadius: '5px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  const datePickerStyle = {
    '& .MuiInputBase-root': {
      display: 'none',
    },
    '& .MuiInputBase-input[type="date"]': {
      display: 'block',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{marginLeft:"5px",marginTop:"83px",backgroundColor:"#666666",width:"100%",marginRight:"5px",height:"230px"}}>
      <div>
        <TextField
          label="CUSTOMER ORDER ID"
          name="CUSTOMER_ORDER_ID"
          value={formData.customer_order_id}
          onChange={handleChange}
          variant="outlined"
            style={inputStyle2}
        />
        <TextField
          label="SALES ORG"
          name="SALES_ORG"
          value={formData.sales_org}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle2}
        />
         <TextField
          label="DISTRIBUTION_CHANNEL"
          name="DISTRIBUTION_CHANNEL"
          value={formData.distribution_channel}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle1}
        />
      </div>
      <div>
       
      </div>
      <div>
        <TextField 
          label="CUSTOMER NUMBER"
          name="CUSTOMER_NUMBER"
          value={formData.customer_number}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle2}
        />
        <TextField
          label="COMPANY CODE"
          name="COMPANY_CODE"
          value={formData.company_code}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle2}
        />
         <TextField
          label="ORDER AMOUNT"
          name="ORDER_AMOUNT"
          value={formData.order_currency}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle3}
        />
        <TextField
          label="AMOUNT IN USD"
          name="AMOUNT_IN_USD"
          value={formData.amount_in_usd}
          onChange={handleChange}
          variant="outlined"
          style={inputStyle3}
        />
        <TextField
          label="ORDER CREATION DATE"
          name="ORDER CREATION DATE"
          type="date"
          value={formData.order_creation_date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          style={inputStyle3}
          className={datePickerStyle}
        />
      </div>

      <div>
        <button
          type="submit"
          style={{backgroundColor: '#fc7500', color: 'white', border: 'none', width: '48%',marginRight:"10px",marginLeft: '1%',marginTop:'-20px',height:"40px", borderRadius: '5px'  }}
        >
          ADD
        </button>
        <button
          type="button"
          onClick={handleCancel}
          style={{backgroundColor: '#db4437', color: 'white', border: 'none', width: '48%',marginRight:"10px",marginLeft: '1%',marginTop:'-20px',height:"40px", borderRadius: '5px' }}
        >
          CLEAR DATA
        </button>
      </div>
      </div>
    </form>
  );
}


