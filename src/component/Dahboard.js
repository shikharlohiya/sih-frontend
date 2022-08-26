import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import {
  getMonthlyRevenue,
  getNationalityRevenue,
  getTopMonumentDayWise,
  getTopMonuments,
  getTopStates,
  getTotalRevenue,
} from "../store/API";
import "./Dashboard.css";

export default function Dahboard() {
  const dispatch = useDispatch();
  const {
    totalRevenue,
    nationalityRevenue,
    topStates,
    topMonuments,
    topMonumentDayWise,
    monthlyRevenue,
  } = useSelector((state) => state.dashboard);
  const [data1, setData1] = useState({
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      labels: ["Indians", "Foreigners"],
    },
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
  });

  const [data2, setData2] = useState({
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
        categories: topStates.labels,
      },
    },
  });
  const [data3, setData3] = useState({
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
        categories: topMonuments.labels,
      },
    },
  });
  const [data4, setData4] = useState({
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
  });
  const [data5, setData5] = useState({
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
        categories: topStates.labels,
      },
    },
  });

  useEffect(() => {
    setData1({
      series: nationalityRevenue.data,
      chartOptions: {
        labels: nationalityRevenue.label,
      },
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
    });
  }, [nationalityRevenue]);
  useEffect(() => {
    setData2({
      series: [
        {
          data: topStates.data,
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
    });
  }, [topStates.data]);

  useEffect(() => {
    setData3({
      series: [
        {
          data: topMonuments.data,
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
          categories: topStates.labels,
        },
      },
    });
  }, [topMonuments.data]);
  useEffect(() => {
    setData4({
      series: topMonumentDayWise,
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
    });
  }, [topMonumentDayWise]);

  // useState(() => {
  //   setData5({
  //     series: [
  //       {
  //         data:
  //           monthlyRevenue.length === 0
  //             ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1]
  //             : monthlyRevenue,
  //       },
  //     ],
  //     options: {
  //       chart: {
  //         type: "bar",
  //         height: 350,
  //       },
  //       plotOptions: {
  //         bar: {
  //           borderRadius: 4,
  //           horizontal: false,
  //         },
  //       },
  //       dataLabels: {
  //         enabled: false,
  //       },
  //       xaxis: {
  //         categories: [
  //           "a",
  //           "b",
  //           "c",
  //           "d",
  //           "a",
  //           "b",
  //           "c",
  //           "d",
  //           "a",
  //           "b",
  //           "c",
  //           "d",
  //         ],
  //       },
  //     },
  //   });
  //   console.log(monthlyRevenue);
  // }, [monthlyRevenue]);
  useEffect(() => {
    dispatch(getTotalRevenue());
    dispatch(getNationalityRevenue());
    dispatch(getTopStates());
    dispatch(getTopMonuments());
    dispatch(getTopMonumentDayWise());
    dispatch(getMonthlyRevenue());
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-3">
          <div className="card-value">
            <div className="card-value-title"> Min. visitors each day</div>
            <div className="card-value-value">100</div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-value">
            <div className="card-value-title"> Avg. visitors each day</div>
            <div className="card-value-value">100</div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-value">
            <div className="card-value-title"> Max. visitors each day</div>
            <div className="card-value-value">100</div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-value">
            <div className="card-value-title">Total Revenue</div>
            <div className="card-value-value">{totalRevenue}</div>
          </div>
        </div>
      </div>
      <h3>Revenue Genreation</h3>
      <div className="row">
        <div className="col-4">
          Indian/Foriegner
          <ReactApexChart
            options={data1.options}
            series={data1.series}
            labels={data1.labels}
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
          options={data3.options}
          series={data3.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="row">
        <div className="col-7">
          Day Wise
          <ReactApexChart
            options={data4.options}
            series={data4.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="col-7">
          {/* Monthly
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            type="bar"
            height={350}
          /> */}
        </div>
        <div className="col-5">Family/Couple bookings</div>
      </div>
    </>
  );
}
