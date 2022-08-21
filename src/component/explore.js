import React from "react";
import explor from "./explore.jpg";
import "./explore.css";
import guide from "./guide.png";
import health from "./health.png";
import water from "./water.png";
import secure from "./secure.png";
import desk from "./desk.png";
import amb from "./amb.png";
import Chart from "react-apexcharts";
import w1 from "./images/w-1.svg";
export default function explore() {
  const data = {
    series: [
      {
        name: "t °C",
        data: [1, 2, 4, 5, 5, 5, 6, 6, 6],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },

      dataLabels: {
        enabled: true,
        textAnchor: "middle",
        offsetY: -5,
        style: {
          fontSize: "12px",
          colors: ["#333", "#999"],
        },
        background: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#46c2ff"],
        width: 2,
      },

      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      tooltip: {
        x: {
          show: false,
        },

        fixed: {
          enabled: true,
        },
      },
      xaxis: {
        type: "string",
        categories: [
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
          "12:00 AM",
        ],
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          offsetX: -10,
        },
      },
    },
  };
  return (
    <>
      <div className="explore-img-div">
        <img src={explor} alt=".." className="explore-img123"></img>
      </div>
      <p>Red Fort</p>
      <p className="monument-desc">
        The beautiful Red Fort (Lal Qila) was built by Shah Jahan in 1648 and
        served as the seat of Mughal power until 1857. This stunning structure,
        with its tall, red sandstone walls covers an area of more than two
        square kilometers, the entirety of which is crescent shaped and
        surrounded by a moat. It is proof of the glory of the flourishing Mughal
        Empire in Delhi.
      </p>
      <p className="para">Opening closing time</p>
      <p className="monument-desc2">Sunrise to sunset. (Only monday closed)</p>
      <p className="para">Entrance Fee</p>
      <p className="monument-desc3">Rs.10 (Indians) Rs.250 (Foreigners)</p>
      <div className="chart-cont">
        <div className="weather-cont">
          <div className="wheather-1">
            <div className="status">
              <div>
                <img src={w1} className="icon-weather" />
              </div>
              <div>
                <div className="heading-temp">
                  Average dailt t<sup>o</sup>
                </div>
                <div className="heading-temp-count">
                  25.9{" "}
                  <sup className="heading-temp-count-deg">
                    <sup>o</sup>C
                  </sup>
                </div>
              </div>
            </div>
            <div>
              <div>Chance of precipitation: 0 %</div> <div>Humidity: 77 %</div>
              <div> Wind: 2.01 m/s</div>
            </div>
          </div>
          <div className="wheather-2">
            <div className="heading-temp-count"> New York , US</div>
            <div>Population: 8,175,133</div>
            <div>Aug 24</div>
            <div>Mainly cloudy</div>
          </div>
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="area"
          height={350}
        />
        <div className="weather-card">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div className="card-info">
                <div>Aug 21</div>
                <div>
                  <img src={w1} />
                </div>
                <div>
                  25.9 <sup>o</sup>C
                </div>
                <div>partly cloudy</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <p className="serv12">In momument services</p>
        <div className=" val-dec-12 row">
          <div className="col-6 serv123">
            {" "}
            <img src={secure} alt=".." className="img-serv-12"></img>24 hour on
            site security
          </div>
          <div className="col-6 serv123 mar-1-2">
            {" "}
            <img src={desk} alt=".." className="img-serv-12"></img>Information
            desk
          </div>
          <div className="col-6 serv123 mar-top1">
            {" "}
            <img src={guide} alt=".." className="img-serv-12"></img>Tour guide
          </div>
          <div className="col-6 serv123 mar-1-2 mar-top1">
            {" "}
            <img src={water} alt=".." className="img-serv-12"></img>Drinking
            Water
          </div>
        </div>
      </div>
      <div className="container">
        <p className="serv12">Emergeny Support</p>
        <div className=" val-dec-12 row">
          <div className="col-6 serv123">
            <img src={amb} alt=".." className="img-serv-12"></img>Ambulance
          </div>
          <div className="col-6 serv123 mar-1-2">
            {" "}
            <img src={health} alt=".." className="img-serv-12"></img>First Aid
          </div>
        </div>
      </div>
    </>
  );
}
