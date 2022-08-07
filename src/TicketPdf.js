import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./TicketPdf.css"
import ReactDOMServer from "react-dom/server" 
const TicketPrint = () =>{
  return (
    <div style={{width:'200px'}}>
            <div className='info-div'>
          <h3>E-Ticket for Taj Mahal</h3>
          <p>Ticket is valid for one person and one time use only</p>
        </div>
        <div className='row'>
          <div className='col-8'>
              <h4>Ticket Details</h4>
              <div className='row'>
                <div className='col-6'>
                    <h5>Ticket Type</h5>
                </div>
                <div className='col-6'>
                    <h5>Adult</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Visitor Type</h5>
                </div>
                <div className='col-6'>
                    <h5>Indian</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Ticket Number</h5>
                </div>
                <div className='col-6'>
                    <h5>1234567898</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>ASI Fee</h5>
                </div>
                <div className='col-6'>
                    <h5>Rs 50</h5>
                </div>
              </div>
              <h4>Validity</h4>
              <div className='row'>
                <div className='col-6'>
                    <h5>Date</h5>
                </div>
                <div className='col-6'>
                    <h5>2022-08-08</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Time</h5>
                </div>
                <div className='col-6'>
                    <h5>6:am-12:00pm</h5>
                </div>
              </div>
              
              <h4>Visitor's Detail</h4>
              <div className='row'>
                <div className='col-6'>
                    <h5>Name</h5>
                </div>
                <div className='col-6'>
                    <h5>xyz</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Age</h5>
                </div>
                <div className='col-6'>
                    <h5>12</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Identity Type</h5>
                </div>
                <div className='col-6'>
                    <h5>Others</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                    <h5>Identity No</h5>
                </div>
                <div className='col-6'>
                    <h5>1234567989</h5>
                </div>
              </div>
          </div>
          <div className='col-4'>
            <img src="/imagess/imagess/temp-qr.png"/>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h3>Important Information</h3>
              <ol>
                <li>The e-ticket is not transferable</li>
                <li>Entry Fee is not refundable</li>
                <li>E-Ticket cancellations are not permitted</li>
                <li>The Monument is open for visitors between sunrise and sunset</li>
                <li>Visitor shall be required to show photo identity proof</li>
                <li>Edibles are not allowed inside the Monument</li>
                <li>Inflammable/dangerous/explosive articles are not allowed</li>
                <li>The entry to the monument will be closed 30 minutes prior to the closing time of the monument</li>
                <li>Ticket is valid only for 3 hourse from the time of the entry</li>
              </ol>
            </div>
            <div className='col-6'>
              <img src='/imagess/imagess/ind-day.jpg' className='ind-img'></img>
            </div>
          </div>
        </div>
    </div>
  )
}
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
    // window.html2canvas = html2canvas;
    // var doc = new jsPDF({
    //   orientation: "potrait",
    //   unit: "px",
    // //   format: [4, 2]
    // });


    var doc = new jsPDF('p', 'pt', 'a4');
      doc.html(
        ReactDOMServer.renderToStaticMarkup(<TicketPrint  />),
        {
          callback: function (pdf) {
            var pageCount = doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount);
            pdf.save('CashReceipt.pdf');
          },
        }
      );


    // var content = document.getElementById("content-22");
    // console.log("content", content);
    // console.log("document.body", document.body);
    // doc.html(content, {
    //   callback: function(doc) {
    //     console.log("in callback");
    //     doc.save();
    //   }
    // });
}

  return (
    <>
       <div id='content-22'>
        <div className='row '>
          <div className='col-6'>
            <img src="/imagess/imagess/download.png" alt=".." className='img-moc'/>
          </div>
          <div className='col-6'>
            <img src="/imagess/imagess/download.jpg" alt=".."/>
            </div>
        </div>
    <TicketPrint />
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

