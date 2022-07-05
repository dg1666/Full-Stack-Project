import {useState} from 'react'
import UnstyledTabsCustomized from './Tabs'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';

function DeleteDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleCloseDelete = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
   
  function deleteNow(){
    props.deleteData();
    handleCloseDelete();
  }

  return (
    <Dialog onClose={handleCloseDelete} open={open}>
      <div style={{width:"500px", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
          <h2>Delete Records?</h2>
          <h3>Are you sure you want to delete these record[s]?</h3>
      </div>
      
      <div style={{background:"rgba(40,61,74,1)", display:"flex", justifyContent:"center"}}>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={handleCloseDelete}>Cancel</button>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={deleteNow}>Delete</button>
      </div>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};






function EditDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [invoice, setInvoice]=useState("")
  const [terms, setTerms]=useState("")

  function changeInvoice(e){
    setInvoice(e.target.value)
  }
  function changeTerms(e){
    setTerms(e.target.value)
  }
  const handleCloseEdit = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
   
  function EditNow(){
    props.editData(invoice, terms);
    handleCloseEdit();
  }

  return (
    <Dialog onClose={handleCloseEdit} open={open}>
      <div style={{width:"500px", padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white'}}>
          <h2>Edit</h2>
      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex"}}>
      <TextField value={invoice} onChange={changeInvoice} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Invoice Currency" variant="outlined" />
      <TextField value={terms} onChange={changeTerms} sx={{background:"white", borderRadius:"8px", margin:"10px 20px"}} id="outlined-basic" label="Customer Payment Terms" variant="outlined" />
      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex", justifyContent:"center"}}>
      <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={EditNow}>Edit</button>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={handleCloseEdit}>Cancel</button>
        
      </div>
    </Dialog>
  );
}

EditDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function AddDialog(props) {
  const { onClose, selectedValue, open } = props;

  const [sl_no, setsl_no]=useState("")
  const [business_code, setbusiness_code]=useState("")
  const [cust_number, setcust_number]=useState("")
  const [clear_date, setclear_date]=useState("")
  const [buisness_year, setbuisness_year]=useState("")
  const [doc_id, setdoc_id]=useState("")
  const [posting_date, setposting_date]=useState("")
  const [document_create_date, setdocument_create_date]=useState("")
  const [document_create_date1, setdocument_create_date1]=useState("")
  const [due_in_date, setdue_in_date]=useState("")
  const [invoice_currency, setinvoice_currency]=useState("")
  const [document_type, setdocument_type]=useState("")
  const [posting_id, setposting_id]=useState("")
  const [area_business, setarea_business]=useState("")
  const [total_open_amount, settotal_open_amount]=useState("")
  const [baseline_create_date, setbaseline_create_date]=useState("")
  const [cust_payment_terms, setcust_payment_terms]=useState("")
  const [invoice_id, setinvoice_id]=useState("")

  const changeSlNo=(e)=>{setsl_no(e.target.value)}
  const changeBusiness_code=(e)=>{setbusiness_code(e.target.value)}
  const changeCust_number=(e)=>{setcust_number(e.target.value)}
  const changeClear_date=(e)=>{setclear_date(e.target.value)}
  const changeBuisness_year=(e)=>{setbuisness_year(e.target.value)}
  const changeDoc_id=(e)=>{setdoc_id(e.target.value)}
  const changePosting_date=(e)=>{setposting_date(e.target.value)}
  const changeDocument_create_date=(e)=>{setdocument_create_date(e.target.value)}
  const changeDocument_create_date1=(e)=>{setdocument_create_date1(e.target.value)}
  const changeDue_in_date=(e)=>{setdue_in_date(e.target.value)}
  const changeInvoice_currency=(e)=>{setinvoice_currency(e.target.value)}
  const changeDocument_type=(e)=>{setdocument_type(e.target.value)}
  const changePosting_id=(e)=>{setposting_id(e.target.value)}
  const changeArea_business=(e)=>{setarea_business(e.target.value)}
  const changeTotal_open_amount=(e)=>{settotal_open_amount(e.target.value)}
  const changeBaseline_create_date=(e)=>{setbaseline_create_date(e.target.value)}
  const changecust_payment_terms=(e)=>{setcust_payment_terms(e.target.value)}
  const changeInvoice_id=(e)=>{setinvoice_id(e.target.value)}


  const handleCloseAdd = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
   
  function AddNow(){
    props.addData(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
    console.log(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id)
    handleCloseAdd();
  }

  return (
    <Dialog  onClose={handleCloseAdd} open={open} maxWidth={'lg'} >
      <div style={{padding:20, backgroundColor: "rgba(40,61,74,1)", color:'white',}}>
          <h2>Add</h2>
      </div>
      <div style={{backgroundColor: "rgba(40,61,74,1)"}}>
      
      <TextField onChange={changeSlNo} value={sl_no} style={{width:"224px",background:"white",margin:"8px"}} type="text" variant="outlined" label="Sl No"/>
      <TextField onChange={changeCust_number} value={cust_number} style={{width:"224px",background:"white",margin:"8px"}} type="text" label="Customer Number"/>
      <TextField onChange={changeClear_date} value={clear_date} style={{width:"224px",background:"white",margin:"8px"}} label="Clear Date"/>
      <TextField onChange={changeBuisness_year} value={buisness_year} style={{width:"224px",background:"white",margin:"8px"}} type="text" label="Business Year"/>

      </div>
      <div style={{backgroundColor: "rgba(40,61,74,1)"}}>
      <TextField onChange={changeDoc_id} value={doc_id} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Document Id"/>
      <TextField onChange={changePosting_date} value={posting_date} style={{width:"224px",background:"white",margin:"8px", }}   label="Posting Date"/>
      <TextField onChange={changeDocument_create_date} value={document_create_date} style={{width:"224px",background:"white",margin:"8px" }} label="Document Create Date"/>
      <TextField onChange={changeDue_in_date} value={due_in_date} style={{width:"224px",background:"white",margin:"8px" }} label="Due In Date"/>

      </div>
      <div style={{backgroundColor: "rgba(40,61,74,1)"}}>
      <TextField onChange={changeInvoice_currency} value={invoice_currency} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Invoice Currency"/>
      <TextField onChange={changeDocument_type} value={document_type} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Document Type"/>
      <TextField onChange={changePosting_id} value={posting_id} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Posting Id"/>
      <TextField onChange={changeTotal_open_amount} value={total_open_amount} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Total Open Amount"/>


      </div>
      <div style={{backgroundColor: "rgba(40,61,74,1)"}}>
      <TextField onChange={changeBaseline_create_date} value={baseline_create_date} style={{width:"224px",background:"white",margin:"8px" }} label="Baseline Create Date"/>
      <TextField onChange={changecust_payment_terms} value={cust_payment_terms} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Customer Payment Terms"/>
      <TextField onChange={changeInvoice_id} value={invoice_id} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Invoice Id"/>
      <TextField onChange={changeBusiness_code} value={business_code} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Business Code"/>

      </div>
      <div style={{backgroundColor: "rgba(40,61,74,1)"}}>
      <TextField onChange={changeDocument_create_date1} value={document_create_date1} style={{width:"224px",background:"white",margin:"8px" }} label="Document Create Date1"/>
      <TextField onChange={changeArea_business} value={area_business} style={{width:"224px",background:"white",margin:"8px" }} type="text" label="Area Business"/>

      </div>
      <div style={{background:"rgba(40,61,74,1)", display:"flex", justifyContent:"center"}}>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={handleCloseAdd}>Cancel</button>
        <button style={{width:"47%", background:"transparent",color:"white", margin:"3px", padding:"13px", border:"1px solid white"}} onClick={AddNow}>Add</button>
      </div>
    </Dialog>
  );
}

AddDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};




export default function Functionality({ predictData,deleteData,editData, searchData, advanceSearchData, addData}) {
  const [deleteOpen, setdeleteOpen] = useState(false);
  const [editOpen, seteditOpen] = useState(false);
  const [saveOpen, setsaveOpen] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const handleClickOpenDelete = () => {
    setdeleteOpen(true);
  };

  const handleCloseDelete = (value) => {
    setdeleteOpen(false);
  };

  const handleClickOpenEdit = () => {
    seteditOpen(true);
  };

  const handleCloseEdit = (value) => {
    seteditOpen(false);
  };

  const handleClickOpenSave = () => {
    setsaveOpen(true);
  };

  const handleCloseSave = (value) => {
    setsaveOpen(false);
  };


  const onChangeSearch = (e) => {
    setsearchValue(e.target.value)
    console.log(e.target.value)
    searchData(e.target.value)
  };

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px"}}>
        <UnstyledTabsCustomized predictData={predictData} advanceSearchData={advanceSearchData}/>
        <TextField value={searchValue}  sx={{background:"white", borderRadius:"8px"}} id="outlined-basic" onChange={onChangeSearch} label="Search Customer Id" variant="outlined" />
        <Button sx={{width:"170px", color:"white"}} variant="outlined" onClick={handleClickOpenSave}>Add</Button>
        <Button sx={{width:"170px", color:"white"}} variant="text" onClick={handleClickOpenEdit}>Edit</Button>
        <Button sx={{width:"170px", color:"white"}} variant="outlined" onClick={handleClickOpenDelete}>Delete</Button>
        <DeleteDialog
        open={deleteOpen}
        onClose={handleCloseDelete}
        selectedValue="hey there"
        deleteData={deleteData}
      />
      <EditDialog
        open={editOpen}
        onClose={handleCloseEdit}
        selectedValue="hey there"
        editData={editData}
      />
      <AddDialog
        open={saveOpen}
        onClose={handleCloseSave}
        selectedValue="hey there"
        addData={addData}
      />

    </div>
    </>
  )
}
