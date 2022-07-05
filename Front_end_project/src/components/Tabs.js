import {useState} from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import AnalyticsModal from './AnalyticsModal'

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 12px 16px;
  width:150px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #7d7dce;
  }

  &:focus {
    color: #fff;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: rgba(20,175,241,1);
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: rgba(40,61,74,1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function AnalyticsDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [analyticsValue, setanalyticsValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setanalyticsValue(newValue);
  };

  const handleCloseAnalytics = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
   
  function AnalyticsNow(){
    handleCloseAnalytics();
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [analyticsModalopen, setanalyticsOpenModal] = useState(false);
  const handleanalyticsModalOpen = () => setanalyticsOpenModal(true);
  const handleanalyticsModalClose = () => setanalyticsOpenModal(false);



  return (
    <Dialog onClose={handleCloseAnalytics} open={open}>
      <div style={{padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
          <h2>Analytics View</h2>
      </div>
      
    <div style={{display:"flex", backgroundColor: "rgba(40,61,74,1)"}}>
      <div style={{width:"40%", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
        <span>Clear Date</span>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="clear_date_begin" name="clear_date_begin"/>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="clear_date_end" name="clear_date_end"/>
      </div>

      <div style={{width:"40%", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
        <span>Due Date</span>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="due_date_begin" name="due_date_begin"/>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="due_date_end" name="due_date_end"/>
      </div>
    </div>

    <div style={{display:"flex", backgroundColor: "rgba(40,61,74,1)"}}>
      <div style={{width:"40%", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
        <span>BaseLine Create date</span>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="baseline_begin" name="baseline_begin"/>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="date" id="baseline_end" name="baseline_end"/>
      </div>

      <div style={{width:"40%", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
        <span>Invoice Currency</span>
        <input style={{width:"100%",margin:"8px",padding:"10px"}} type="text" id="invoice" placeholder='Invoice Currency' name="invoice"/>
      </div>
    </div>


      <div style={{background:"rgba(40,61,74,1)", display:"flex", justifyContent:"center"}}>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={handleanalyticsModalOpen}>Submit</button>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={AnalyticsNow}>Cancel</button>
      </div>
      <Modal
        open={analyticsModalopen}
        onClose={handleanalyticsModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AnalyticsModal/>
        </Box>
      </Modal>
    </Dialog>
  );
}

AnalyticsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function AdvanceDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [AdvanceValue, setAdvanceValue] = useState(new Date('2014-08-18T21:11:54'));

  const [documentId, setdocumentId] = useState("");
  const [invoiceId, setinvoiceId] = useState("");
  const [customerNumber, setcustomerNumber] = useState("");
  const [businessYear, setbusinessYear] = useState("");

  function changedocumentId(e){
    setdocumentId(e.target.value)
  }
  function changeInvoiceId(e){
    setinvoiceId(e.target.value)
  }
  function changecustomerNumber(e){
    setcustomerNumber(e.target.value)
  }
  function changebusinessYear(e){
    setbusinessYear(e.target.value)
  }

  const handleChange = (newValue) => {
    setAdvanceValue(newValue);
  };

  const handleCloseAdvance = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
   
  function AdvanceNow(){
    props.advanceSearchData(documentId,invoiceId,customerNumber,businessYear)
    handleCloseAdvance();
  }

 


  return (
    <Dialog onClose={handleCloseAdvance} open={open}>
      <div style={{width:"500px", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
          <h2>Advance Search</h2>
      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex"}}>
      <TextField value={documentId} onChange={changedocumentId} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Document Id" variant="outlined" />
      <TextField value={invoiceId} onChange={changeInvoiceId} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Invoice id" variant="outlined" />
      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex"}}>
      <TextField value={customerNumber} onChange={changecustomerNumber} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Customer Number" variant="outlined" />
      <TextField value={businessYear} onChange={changebusinessYear} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Business Year" variant="outlined" />
      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex", justifyContent:"center"}}>
      <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={AdvanceNow}>Search</button>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={handleCloseAdvance}>Cancel</button>
        
      </div>
    </Dialog>
  );
}

AdvanceDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};



export default function UnstyledTabsCustomized({predictData, advanceSearchData}) {
  const [AnalyticsOpen, setAnalyticsOpen] = useState(false);
  const [AdvanceOpen, setAdvanceOpen] = useState(false);
  
  const handleClickOpenAnalytics = () => {
    console.log('analytics')
    setAnalyticsOpen(true);
  };

  const handleCloseAnalytics = (value) => {
    setAnalyticsOpen(false);
  };

  const handleClickOpenAdvance = () => {
    setAdvanceOpen(true);
  };

  const handleCloseAdvance = (value) => {
    setAdvanceOpen(false);
  };
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab onClick={predictData}>Predict</Tab>
        <Tab onClick={handleClickOpenAnalytics}>Analytics Views</Tab>
        <Tab onClick={handleClickOpenAdvance}>Advance Search</Tab>
      </TabsList>
      {/* <TabPanel value={0}>First content</TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel> */}
      <AnalyticsDialog
        open={AnalyticsOpen}
        onClose={handleCloseAnalytics}
        selectedValue="hey there"
      />
      <AdvanceDialog
        open={AdvanceOpen}
        onClose={handleCloseAdvance}
        selectedValue="hey there"
        advanceSearchData={advanceSearchData}
      />
    </TabsUnstyled>
  );
}
