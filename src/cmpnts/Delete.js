import React,{useState} from 'react'
import { Button,Modal,Box,Typography } from "@material-ui/core";
import axios from "axios";
import qs from 'qs';

export default function Delete({arrIds}) {

    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleDelete = () => {
      // <div>
      //   <child data={data}/>
      // </div>
      console.log( arrIds[0]);

    const data={'Sl_no': arrIds[0]};
    const options={
      method: 'POST',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: qs.stringify(data),
      url: "http://localhost:8081/HrcBackend/delete"
    }

    axios(options).catch(error => {
      console.log(error.response.data);
    });
  
      handleClose();
    };

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
          >
            Delete
          </Button>

         <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)', width: 250, bgcolor: 'background.paper', border: '3px solid black', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            Delete Records?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Are you sure you want to delete these record[s]?
          </Typography>
          <Button variant="contained" color="#FFFFFF" onClick={handleDelete}
          style={{color: "black",border:"1px solid black",backgroundColor:"white",marginRight: "10px",marginTop:"9px"}}
          >
            Delete
          </Button>
          <Button variant="contained" onClick={handleClose}
          style={{color: "black",border:"1px solid black",backgroundColor:"white",marginRight: "10px",marginTop:"9px"}}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>

  )
}
