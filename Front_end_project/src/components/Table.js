import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {useState,useEffect} from 'react'
import Button from '@mui/material/Button';



export default function TableC() {
  const [initialData, setinitialData] = useState([{}])
  const [curData, setcurData] = useState([{}])
  const [slNo,setslNo] = useState(0)
  async function fetchData(){
    fetch("http://localhost:8080/demo2/Data").then(
    res => {
      res.json().then(
        data => {
          console.log('data is', data);
          setinitialData(data)
          setcurData(data.slice(0,5))
        }
      )
    }
    )
  }
  useEffect(() => {
    fetchData()
  }, [])
  
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
  function onChangeSl(event)
  {
    // console.log('changed',event.target.value);
    setslNo(event.target.value)
  }

  

  


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const thead=['Sno', 'cust_number', 'buisness_year', 'doc_id', 'due_in_date', 'converted_usd', 'business_code_enc','business_code_enc','day_of_postingdate', 'month_of_postingdate', 'year_of_postingdate', 'day_of_due','month_of_due', 'year_of_due','day_of_createdate', 'month_of_createdate','year_of_createdate', 'cust_payment_terms_enc', 'name_customer_enc','clear_date']
  return (
    <>
    <Button  onClick={deleteData} sx={{width:"170px", color:"white"}} variant="outlined">Delete</Button>
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
              curData.map(d=>{
                  return(
                    <>
                    <TableRow value={d.sl_no} onClick={onChangeSl}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                     <TableCell  sx={{ color:"white"}} ><Checkbox value={d.sl_no}  sx={{color:"white"}} {...label} /></TableCell>
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
                    </>
                  )
                })}

        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
 
}

