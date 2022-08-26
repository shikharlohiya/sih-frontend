import React, { Component } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ReactApexChart from "react-apexcharts";
export default class Dahboard extends Component {
  render() {
    const data1 = {
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
      <div>
        <p>State</p>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Uttar Pradesh</MenuItem>
            <MenuItem value={30}>Maharashtra</MenuItem>
          </Select>
        </FormControl>
        <p>Monument With Maximum Revenue</p>
        <p></p>
        <p>Monument with Minimum Revenue</p>
        <p></p>
        <p>Order By</p>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Higher Revenue</MenuItem>
            <MenuItem value={20}>Lower Revenue</MenuItem>
          </Select>
        </FormControl>
        <ReactApexChart
          options={data1.options}
          series={data1.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
