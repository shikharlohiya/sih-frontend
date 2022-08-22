import { height } from "@mui/system";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Dashboard.css";

export default function Dahboard() {
  const data = {
    series: [70, 25, 5],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },

      labels: ["Adults", "Children", "Others"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const data2 = {
    series: [70, 30],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Indain", "Foreigner"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const data3 = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
  };
  const data4 = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#DD9020"],
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
  };

  return (
    <div className="back-org">
      <div className="row">
        <div className="col-7">
          <div className="div-50-1">
            <p className="name-green">State</p>
            <p className="name-orange">Agra</p>
          </div>
          <div className="div-50-1">
            <p className="name-green">Monument</p>
            <p className="name-orange">Taj Mahal</p>
          </div>
          <div className="div-30-1">
            {" "}
            <p className="name-green2">Min. visitors each day</p>
            <p className="name-orange">500</p>
          </div>
          <div className="div-30-1">
            {" "}
            <p className="name-green2">Avg. visitors each day</p>
            <p className="name-orange">500</p>
          </div>
          <div className="div-30-1">
            {" "}
            <p className="name-green2">Max. visitors each day</p>
            <p className="name-orange">500</p>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
      <div className="row">
        <div className="col-4">
          {" "}
          <p className="name-green2">Visitor Type</p>
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            labels={data2.labels}
            type="donut"
          />
        </div>
        <div className="col-4">
          <p className="name-green2">Ticket Type</p>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="pie"
            width={380}
          ></ReactApexChart>
        </div>
        <div className="col-4">
          <p className="name-green2">Identity Type </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="name-green2">Top 10 Monuments Visited</p>
          <ReactApexChart
            options={data3.options}
            series={data3.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="col-6">
          <div className="div-50-1">
            <p className="name-green2">Avg. Visiting Time</p>
            <ReactApexChart
              options={data4.options}
              series={data4.series}
              type="bar"
              height={350}
            />
          </div>
          <div className="div-50-1">
            <p className="name-green2">Max. Visiting Time</p>
            <ReactApexChart
              options={data4.options}
              series={data4.series}
              type="bar"
              height={350}
            />
          </div>
          <div>Visitore Per Day</div>
        </div>
      </div>
    </div>
  );
}
