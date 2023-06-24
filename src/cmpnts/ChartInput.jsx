import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const ChartInput = () => {
  const [firstField, setFirstField] = useState('');
  const [secondField, setSecondField] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/your-backend-api-url', {
        distributionChannel: firstField,
        customerNumber: secondField,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ border: '1px solid white', padding: '10px',  borderRadius: '6px'  }}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Distribution Channel"
          value={firstField}
          onChange={(e) => setFirstField(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px', backgroundColor: 'white',  borderRadius: '3px'  }}
        />
        <TextField
          variant="outlined"
          label="Customer Number"
          value={secondField}
          onChange={(e) => setSecondField(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px', backgroundColor: 'white', borderRadius: '3px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center',}}>
          <button 
          type="submit" 
          style={{ 
            width: '100%',
              height: '40px',
              backgroundColor: 'transparent',
              border: '1px solid white',
              color: 'white',
              borderRadius: '3px',
            }}>
                View
            </button>
        </div>
      </form>
    </div>
  );
};

export default ChartInput;
