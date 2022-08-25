import { height } from "@mui/system";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Dashboard.css";

export default function Dahboard() {
  const data1 = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
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
          horizontal: false,
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
  const data3 = {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    },
  };
  const data4 = {
    series: [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "Fiction Books Sales",
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function (val) {
            return val + "K";
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <>
      <div className="row">
        <div className="col-3">Min. visitors each day</div>
        <div className="col-3">Avg. visitors each day</div>
        <div className="col-3">Max. visitors each day</div>
        <div className="col-3">Total Revenue</div>
      </div>
      <h3>Revenue Genreation</h3>
      <div className="row">
        <div className="col-4">
          Indian/Foriegner
          <ReactApexChart
            options={data1.options}
            series={data1.series}
            type="donut"
          />
        </div>
        <div className="col-8">
          Top 10 States with highest revenues
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
      <div>
        <h4>Monuments with highest revenues</h4>
        <ReactApexChart
          options={data2.options}
          series={data2.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="row">
        <div className="col-7">
          last 7 days
          <ReactApexChart
            options={data4.options}
            series={data4.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="col-7">
          Monthly
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="col-5">Family/Couple bookings</div>
      </div>
    </>
  );
}
