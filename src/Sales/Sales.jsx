import React from "react";
import "./Sales.css";

function Sales() {
  const salesList = [
    {
      id: 1,
      billNo: "INV001",
      customer: "Raja",
      date: "23-06-2026",
      items: 5,
      amount: 1200,
      payment: "Cash",
    },
    {
      id: 2,
      billNo: "INV002",
      customer: "Kumar",
      date: "23-06-2026",
      items: 3,
      amount: 850,
      payment: "Card",
    },
    {
      id: 3,
      billNo: "INV003",
      customer: "Arun",
      date: "22-06-2026",
      items: 7,
      amount: 2100,
      payment: "UPI",
    },
  ];

  return (
    <div className="sales-container">
      <h1>Sales List</h1>

      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bill No</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Items</th>
            <th>Amount (₹)</th>
            <th>Payment</th>
          </tr>
        </thead>

        <tbody>
          {salesList.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.billNo}</td>
              <td>{sale.customer}</td>
              <td>{sale.date}</td>
              <td>{sale.items}</td>
              <td>₹{sale.amount}</td>
              <td>{sale.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;