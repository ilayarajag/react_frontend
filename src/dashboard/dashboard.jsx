import React from "react";
import "./dashboard.css";
import {
  BarChart,
  Bar,
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

  return (
    <div className="dashboard">
      <h5>POS Dashboard</h5>

      {/* Dashboard Cards */}
      <div className="cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>150</p>
        </div>

        <div className="card">
          <h3>Total Customers</h3>
          <p>80</p>
        </div>

        <div className="card">
          <h3>Today's Sales</h3>
          <p>₹25,000</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>45</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart-box">
          <h2>Monthly Sales</h2>

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

        <div className="chart-box">
          <h2>Sales Growth</h2>

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
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;