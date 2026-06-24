import React from "react";
import "./dashboard.css";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const salesData = [
    { month: "Jan", sales: 120000 },
    { month: "Feb", sales: 150000 },
    { month: "Mar", sales: 180000 },
    { month: "Apr", sales: 160000 },
    { month: "May", sales: 210000 },
    { month: "Jun", sales: 250000 },
  ];

  const categoryData = [
    { name: "Drinks", value: 400 },
    { name: "Food", value: 300 },
    { name: "Snacks", value: 200 },
    { name: "Others", value: 100 },
  ];

  const COLORS = ["#3498db", "#2ecc71", "#f39c12", "#e74c3c"];

  return (
    <div className="dashboard">
      {/* <h2>POS Dashboard</h2> */}

      <div className="charts">

        {/* Bar Chart */}
        <div className="chart-box">
          <h3>Monthly Sales</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Diagram */}
        <div className="chart-box">
          <h3>Product Category</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Line Chart */}
      <div className="chart-box">
        <h3>Sales Growth</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2ecc71"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Dashboard;