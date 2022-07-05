
import './App.css';
import Header from './components/Header';
import Functionality from './components/Functionality';
import Footer from './components/Footer';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function App() {

  const [initialData, setinitialData] = useState([{}])
  const [curData, setcurData] = useState([{}])
  const [slNo,setslNo] = useState(0)
  const [doc_id,setdoc_id] = useState(0)
  const [lastIndex,setlastIndex] = useState(0)
  const [curIndex,setcurIndex] = useState(-1)
  const [predictModalopen, setpredictModalOpen] = useState(false);
  const handleModalOpen = () => setpredictModalOpen(true);
  const handleModalClose = () => setpredictModalOpen(false);


  const predictModalstyle = {
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

  

  async function fetchData(){
    fetch("http://localhost:8080/demo2/Data").then(
    res => {
      res.json().then(
        data => {
          console.log('data is', data);
          setinitialData(data)
          setcurData(data.slice(lastIndex,lastIndex+5))
        }
      )
    }
    )
  }
  useEffect(() => {
    fetchData()
  }, [lastIndex])


  async function deleteData(){
    fetch("http://localhost:8080/demo2/DeleteServlet", {
      method: 'POST',
      body:JSON.stringify({
  "sl_no":slNo
  }),
headers: {'Content-Type' : 'application/json; charset=UTF-8'}

  })
     .then(function(data){
      fetchData()
      console.log("sl no is", slNo);
         
        })
      
  }

 
 
  async function editData(invoice, terms){
    fetch("http://localhost:8080/demo2/EditServlet", {
      method: 'POST',
      body:JSON.stringify({
        "invoice_currency":invoice,
        "cust_payment_terms":terms,
        "sl_no":slNo
  }),
headers: {'Content-Type' : 'application/json; charset=UTF-8'}

  })

     .then(function(data){
       fetchData()
      console.log("edited data", slNo);
         
        })
      
  }

  async function addData(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_busines,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id){
    fetch("http://localhost:8080/demo2/AddServlet", {
      method: 'POST',
      body:JSON.stringify({
        "sl_no": Number(sl_no),
        "business_code": business_code,
        "cust_number": Number(cust_number),
        "clear_date": clear_date,
        "buisness_year": Number(buisness_year),
        "doc_id": Number(doc_id),
        "posting_date": posting_date,
        "document_create_date": document_create_date,
        "document_create_date1": document_create_date1,
        "due_in_date": due_in_date,
        "invoice_currency": invoice_currency,
        "document_type": document_type,
        "posting_id": Number(posting_id),
        "area_business": Number(area_busines),
        "total_open_amount": Number(total_open_amount),
        "baseline_create_date": baseline_create_date,
        "cust_payment_terms": cust_payment_terms,
        "invoice_id": Number(invoice_id)
  }),
headers: {'Content-Type' : 'application/json; charset=UTF-8'}

  })

     .then(function(data){
       fetchData()
      console.log("added data", Number(sl_no),business_code,Number(cust_number),clear_date,Number(buisness_year),Number(doc_id),posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,Number(posting_id),Number(area_busines),Number(total_open_amount),baseline_create_date,cust_payment_terms,Number(invoice_id));
         
        })
      
  }

  


  async function predictData(){
    fetch("http://127.0.0.1:5000/", {
      method: 'POST',
      body:JSON.stringify({
        "business_code": initialData[curIndex].business_code, 
        "cust_number": initialData[curIndex].cust_number, 
        "name_customer": "Raaj", 
        "clear_date": initialData[curIndex].clear_date,
        "buisness_year": initialData[curIndex].buisness_year,
        "doc_id": initialData[curIndex].doc_id, 
        "posting_date": initialData[curIndex].posting_date,
        "due_in_date": initialData[curIndex].due_in_date,
        "baseline_create_date":initialData[curIndex].baseline_create_date,
        "cust_payment_terms": initialData[curIndex].cust_payment_terms,
        "converted_usd": initialData[curIndex].total_open_amount,
  }),
headers: {'Content-Type' : 'application/json; charset=UTF-8'}

  })

     .then(function(data){
        fetchData()
        console.log("predicted data", data);
        handleModalOpen()
        })
      
  }

  




  async function searchData(custNum){
    fetch("http://localhost:8080/demo2/search?cust_number="+custNum).then(
    res => {
      res.json().then(
        data => {
          console.log('search data is', data);
          setcurData(data.slice(0,5))
        }
      )
    }
    )
  }

  async function advanceSearchData(docId,invoice,custNum,busiyear){
    fetch("http://localhost:8080/demo2/advsearch?business_year="+busiyear+"&invoice_id="+invoice+"&doc_id="+docId+"&cust_number="+custNum).then(
    res => {
      res.json().then(
        data => {
          console.log('search data is', data);
          setcurData(data.slice(0,5))
        }
      )
    }
    )
  }

  function onChangeSl(event)
  {
    console.log('changed slNumber',event.target.value);
    setslNo(event.target.value)

    for(var i=lastIndex;i<5;i++){
      if(initialData[i].sl_no===Number(event.target.value)){
        setcurIndex(i)
      }
    }
    console.log(initialData[curIndex].total_open_amount)
  }

  function nextPage(){
    setlastIndex(lastIndex+5);
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
    <Modal
        open={predictModalopen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={predictModalstyle}>
        <p>Prediction Data Update Successfully</p>
        <p style={{textAlign:"right"}}><Button variant="text" onClick={handleModalClose}>Close</Button></p>
        </Box>
      </Modal>

      <Header/>
    <Functionality predictData={predictData} addData={addData} advanceSearchData={advanceSearchData} deleteData={deleteData} editData={editData} searchData={searchData}/>

        <TableContainer component={Paper} sx={{background:"none", padding:"10px", width:"unset"}}>
      <Table sx={{ minWidth: 650 , color:"white"}} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell sx={{ color:"white"}} ><Checkbox sx={{color:"white"}} {...label} /></TableCell>
              <TableCell sx={{ color:"white"}} align="right">sl_no</TableCell>
              <TableCell sx={{ color:"white"}} align="right">business_code</TableCell>
              <TableCell sx={{ color:"white"}} align="right">cust_number</TableCell>
              <TableCell sx={{ color:"white"}} align="right">clear_date</TableCell>
              <TableCell sx={{ color:"white"}} align="right">buisness_year</TableCell>
              <TableCell sx={{ color:"white"}} align="right">doc_id</TableCell>
              <TableCell sx={{ color:"white"}} align="right">posting_date</TableCell>
              <TableCell sx={{ color:"white"}} align="right">document_create_date</TableCell>
              <TableCell sx={{ color:"white"}} align="right">document_create_date1</TableCell>
              <TableCell sx={{ color:"white"}} align="right">due_in_date</TableCell>
              <TableCell sx={{ color:"white"}} align="right">invoice_currency</TableCell>
              <TableCell sx={{ color:"white"}} align="right">document_type</TableCell>
              <TableCell sx={{ color:"white"}} align="right">posting_id</TableCell>
              <TableCell sx={{ color:"white"}} align="right">area_business</TableCell>
              <TableCell sx={{ color:"white"}} align="right">total_open_amount</TableCell>
              <TableCell sx={{ color:"white"}} align="right">baseline_create_date</TableCell>
              <TableCell sx={{ color:"white"}} align="right">cust_payment_terms</TableCell>
              <TableCell sx={{ color:"white"}} align="right">invoice_id</TableCell>
              <TableCell sx={{ color:"white"}} align="right">isOpen</TableCell>
              <TableCell sx={{ color:"white"}} align="right">aging_bucket</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
              {
              curData.map((d,index)=>{
                  return(
                    <TableRow key={index} onClick={onChangeSl}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                     <TableCell key={index} sx={{ color:"white"}} ><Checkbox key={index} value={d.sl_no} sx={{color:"white"}} {...label} /></TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.sl_no}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.business_code}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.cust_number}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.clear_date}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.buisness_year}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.doc_id}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.posting_date}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.document_create_date}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.document_create_date1}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.due_in_date}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.invoice_currency}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.document_type}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.posting_id}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.area_business}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.total_open_amount}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.baseline_create_date}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.cust_payment_terms}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.invoice_id}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.isOpen}</TableCell>
                           <TableCell sx={{ color:"white"}} align="right">{d.aging_bucket}</TableCell>
                           </TableRow>
                  )
                })}

        </TableBody>
      </Table>
    </TableContainer>

    <p style={{color:"white", display:"flex", justifyContent:"right", alignItems:"cener"}}>
      <span style={{marginRight:"20px"}}>Rows Per Page: 5</span>
      <span style={{marginRight:"20px"}}>{lastIndex+1}-{lastIndex+5} of 200</span>
      <span onClick={nextPage}><ArrowForwardIosIcon/></span>
      
    </p>


      <Footer/>
    </>
  );
}

export default App;
