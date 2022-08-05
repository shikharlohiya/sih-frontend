import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function TicketPdf() {
    const {id} = useParams();
    const [data,setData] = useState({});
    const getTicket = async ()=>{
        try{
            const res = await axios.get(`http://localhost:8000/user-ticket/${id}`);
            setData(res.data)
        }catch(err){
            console.log(err)
        }
    }
useEffect(()=>{
    getTicket();
},[])
const generatePdf = ()=>{
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
    //   format: [4, 2]
    });

    var content = document.getElementById("content-22");
    console.log("content", content);
    console.log("document.body", document.body);
    doc.html(content, {
      callback: function(doc) {
        console.log("in callback");
        doc.save();
      }
    });
}

  return (
    <>
    <div id="content-22" style={{display:'flex',justifyContent:'space-between'}}>TicketPdf
        <div>name : {data.name}</div>
        <div>aadhar : {data.adhar}</div>
        <img style={{wid:'50px',height:'50px'}}src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>
    </div>
        <button onClick={generatePdf}>genrate pdf</button>
        </>
  )
}

export default TicketPdf




// class App extends React.Component {

//   render() {
//     return (
//       <div className="App content-22" id="content-22">
//         <Invoice />
//       </div>
//     );
//   }
// }
// export default App;

