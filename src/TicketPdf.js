import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./TicketPdf.css";
import ReactDOMServer from "react-dom/server";
import { CircularProgress } from "@mui/material";
const TicketPrint = () => {
  return (
    <div
      style={{ width: "589px", height: "1080px", margin: "auto", padding: 0 }}
    >
      <div style={{ padding: "0 2rem" }}>
        <div
          className=" "
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "2rem 0",
          }}
        >
          <div className="">
            <img
              src="/imagess/imagess/download.png"
              alt=".."
              className="img-moc"
              style={{ width: "105px", height: "105px", borderRadius: "0" }}
            />
          </div>
          <div className="">
            <img
              src="/imagess/imagess/download.jpg"
              alt=".."
              style={{ width: "105px", height: "105px", borderRadius: "0" }}
            />
          </div>
        </div>
        <div
          className=""
          style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}
        >
          <div style={{ fontWeight: "600", fontSize: "1.5rem" }}>
            E-Ticket for Taj Mahal
          </div>
          <div style={{ fontWeight: "600", fontSize: "1rem", opacity: "0.5" }}>
            Ticket is valid for one person and one time use only
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "3" }}>
            <h4
              style={{
                textAlign: "center",
                fontWeight: "600",
                margin: "0 0 2rem 0",
              }}
            >
              Ticket Details
            </h4>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Ticket Type</h5>
              </div>
              <div className="col-6">
                <h5>Adult</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Visitor Type</h5>
              </div>
              <div className="col-6">
                <h5>Indian</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Ticket Number</h5>
              </div>
              <div className="col-6">
                <h5>1234567898</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>ASI Fee</h5>
              </div>
              <div className="col-6">
                <h5>Rs 50</h5>
              </div>
            </div>
            <h4
              style={{
                textAlign: "center",
                fontWeight: "600",
                margin: "0 0 2rem 0",
              }}
            >
              Validity
            </h4>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Date</h5>
              </div>
              <div className="col-6">
                <h5>2022-08-08</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Time</h5>
              </div>
              <div className="col-6">
                <h5>6:am-12:00pm</h5>
              </div>
            </div>

            <h4
              style={{
                textAlign: "center",
                fontWeight: "600",
                margin: "0rem 0 2rem 0",
              }}
            >
              Visitor's Detail
            </h4>
            <div style={{ display: "flex" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Name</h5>
              </div>
              <div className="col-6">
                <h5>xyz</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Age</h5>
              </div>
              <div className="col-6">
                <h5>12</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Identity Type</h5>
              </div>
              <div className="col-6">
                <h5>Others</h5>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0.2rem 0" }}>
              <div className="col-6">
                <h5 style={{ fontWeight: "600" }}>Identity No</h5>
              </div>
              <div className="col-6">
                <h5>1234567989</h5>
              </div>
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src="/imagess/imagess/temp-qr.png"
              style={{ width: "200px" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", margin: "4rem 0" }}>
          <div>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "600",
                margin: "0 0 2rem 0",
              }}
            >
              Important Information
            </h3>
            <ol>
              <li>The e-ticket is not transferable</li>
              <li>Entry Fee is not refundable</li>
              <li>E-Ticket cancellations are not permitted</li>
              <li>
                The Monument is open for visitors between sunrise and sunset
              </li>
              <li>Visitor shall be required to show photo identity proof</li>
              <li>Edibles are not allowed inside the Monument</li>
              <li>Inflammable/dangerous/explosive articles are not allowed</li>
              <li>
                The entry to the monument will be closed 30 minutes prior to the
                closing time of the monument
              </li>
              <li>
                Ticket is valid only for 3 hourse from the time of the entry
              </li>
            </ol>
          </div>
          <div>
            <img
              src="/imagess/imagess/ind-day.jpg"
              style={{ margin: "0 0 0 1rem", borderRadius: "0" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
function TicketPdf() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getTicket = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/user-ticket/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTicket();
  }, []);
  const generatePdf = () => {
    setIsLoading(true);
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(ReactDOMServer.renderToStaticMarkup(<TicketPrint />), {
      callback: function (pdf) {
        pdf.save("CashReceipt.pdf");
        setIsLoading(false);
      },
      // margin: 32,
    });
  };

  return (
    <>
      <div>
        <div style={{ padding: "0 2rem" }}>
          <div className=" ticket-head">
            <div className="">
              <img
                src="/imagess/imagess/download.png"
                alt=".."
                className="img-ticket"
              />
            </div>
            <div className="">
              <img
                src="/imagess/imagess/download.jpg"
                alt=".."
                className="img-ticket"
              />
            </div>
          </div>
          <div
            className=""
            style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}
          >
            <div style={{ fontWeight: "600", fontSize: "1.5rem" }}>
              E-Ticket for Taj Mahal
            </div>
            <div
              style={{ fontWeight: "600", fontSize: "1rem", opacity: "0.5" }}
            >
              Ticket is valid for one person and one time use only
            </div>
          </div>
          <div className="ticket-details">
            <div style={{ flex: "3" }}>
              <h4 className="section-heading">Ticket Details</h4>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Ticket Type</h5>
                </div>
                <div className="col-6">
                  <h5>Adult</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Visitor Type</h5>
                </div>
                <div className="col-6">
                  <h5>Indian</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Ticket Number</h5>
                </div>
                <div className="col-6">
                  <h5>1234567898</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>ASI Fee</h5>
                </div>
                <div className="col-6">
                  <h5>Rs 50</h5>
                </div>
              </div>
              <h4 className="section-heading">Validity</h4>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Date</h5>
                </div>
                <div className="col-6">
                  <h5>2022-08-08</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Time</h5>
                </div>
                <div className="col-6">
                  <h5>6:am-12:00pm</h5>
                </div>
              </div>

              <h4
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  margin: "0rem 0 2rem 0",
                }}
              >
                Visitor's Detail
              </h4>
              <div style={{ display: "flex" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Name</h5>
                </div>
                <div className="col-6">
                  <h5>xyz</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Age</h5>
                </div>
                <div className="col-6">
                  <h5>12</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Identity Type</h5>
                </div>
                <div className="col-6">
                  <h5>Others</h5>
                </div>
              </div>
              <div style={{ display: "flex", margin: "0.2rem 0" }}>
                <div className="col-6">
                  <h5 style={{ fontWeight: "600" }}>Identity No</h5>
                </div>
                <div className="col-6">
                  <h5>1234567989</h5>
                </div>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <img
                src="/imagess/imagess/temp-qr.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", margin: "4rem 0" }}>
            <div>
              <h3 className="section-heading">Important Information</h3>
              <ol>
                <li>The e-ticket is not transferable</li>
                <li>Entry Fee is not refundable</li>
                <li>E-Ticket cancellations are not permitted</li>
                <li>
                  The Monument is open for visitors between sunrise and sunset
                </li>
                <li>Visitor shall be required to show photo identity proof</li>
                <li>Edibles are not allowed inside the Monument</li>
                <li>
                  Inflammable/dangerous/explosive articles are not allowed
                </li>
                <li>
                  The entry to the monument will be closed 30 minutes prior to
                  the closing time of the monument
                </li>
                <li>
                  Ticket is valid only for 3 hourse from the time of the entry
                </li>
              </ol>
            </div>
            <div>
              <img
                src="/imagess/imagess/ind-day.jpg"
                style={{ margin: "0 0 0 1rem", borderRadius: "0" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-div">
        <button onClick={generatePdf} className="generate-btn">
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} size={25} />
          ) : (
            " genrate pdf"
          )}
        </button>
      </div>
    </>
  );
}

export default TicketPdf;

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
