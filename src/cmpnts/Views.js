import { useState } from "react";
//import { useEffect } from "react";
//import { getData, keys } from "./services/data";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TableMUI from './TableMUI';
import AddData from './add_data';
import Ctfoot  from './Ctfoot';
import Headers from './Headers';
import AnalyticsView from "./AnalyticsView";
import SearchR from "./SearchR";


function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Typography component="div" style={{ padding: 8 }}>
          {children}
        </Typography>
      )}
    </div>
  );
}

function Views() {
  const [value, setValue] = useState(0);
  const [showHiddenTab, setShowHiddenTab] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  //const [ad_State, setAddDataState] = useState(false);
  //const [data, setData] = useState([]);

  //useEffect(async () => {
  //  setData(await getData());
  //}, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Perform save logic here
    handleClose();
  };


  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
    setShowHiddenTab(true);
    setValue(3);
     // Perform search logic here and set the search result
   //  setSearchResult(searchValue); // Example: Setting the search result as the entered value
     console.log("SearchValue:",searchValue);
    }
  };

  //const handleAddData = () => {
  //  setAddDataState(!ad_State);
  //  console.log("addData state changed", ad_State);
  //};

  return (
    <div>
      <Headers />
    <div style={{ flexGrow: 1, backgroundColor: '#666666', height: '100vh' }}>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab label="Home Page" 
        style={{ minWidth: 80, fontSize: 12, backgroundColor: '#666666', color: 'white' }}/>
        <Tab label="Add Data" 
        style={{ minWidth: 80, fontSize: 12, backgroundColor: '#666666', color: 'white' }}/>
        <Tab label="Analytics View" 
        style={{ minWidth: 80, fontSize: 12, backgroundColor: '#666666', color: 'white' }}/>
        {showHiddenTab ? (
            <Tab label="Search Result" style={{ minWidth: 80, fontSize: 12, backgroundColor: '#666666', color: 'white' }} />
          ) : ( 
            <TextField
            label="CUSTOMER ORDER ID"
            name="CUSTOMER_ORDER_ID"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            variant="outlined"
            style={{marginTop:"15px",marginLeft:"1000px",  backgroundColor:"white",
            borderRadius:"8px"}}
            
          />
          )}
      </Tabs>
      <Tab>
        <Button variant="contained" onClick={handleOpen} style={{
              color: "white",
              backgroundColor: "#fc7500",
              marginRight: "10px",
      }}>
        ADVANCED SERACHED 
      </Button>
        </Tab>
      <TabPanel value={value} index={0}>
        <TableMUI />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AnalyticsView />
      </TabPanel>
      <TabPanel value={value} index={3}>
          <SearchR/>
        </TabPanel>
    </div >
    <div style={{backgroundColor: 'white', marginUpper: '100px', paddingTop: '100px', }}>
      <Ctfoot />
    </div>
    </div>
  );
}

export default Views;