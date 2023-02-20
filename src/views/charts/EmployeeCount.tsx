import * as React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Legend,
  Tooltip,
  Bar,
} from "recharts";
import Title from "./Title";
import { Paper } from "@mui/material";
import { useAllEmployeesQuery } from "../../services/employeesApi";
import { useSelector } from "react-redux";

export default function Chart() {
  let chartData = [];
  const { data, error, isLoading, isFetching, isSuccess } =
    useAllEmployeesQuery();
  if (data) {
    const d = new Date();
    const currentYear = d.getFullYear();
    let yearWiseRecords: any = [];
    data.forEach((item, index) => {
      let date = new Date(item.joinedDate);
      let year = date.getFullYear();
      yearWiseRecords.push({ ...item, joinedYear: year });
    });

    for (let i = 0; i < 10; i++) {
      let year = currentYear - i;
      const record = {
        name: year,
        male: 0,
        female: 0,
        total: 0,
      };
      yearWiseRecords.filter((item: any) => {
        if (item.joinedYear === year) {
          item.total += 1;
          item.gender === "male" ? (record.male += 1) : (record.female += 1);
        }
      });
      chartData.push(record);
    }
  }

  return (
    <React.Fragment>
      <Title>Employees joined in last 10 years</Title>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 500,
        }}
      >
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="female" stackId="a" fill="#d37593" />
            <Bar dataKey="male" stackId="a" fill="#6ac0de" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </React.Fragment>
  );
}
