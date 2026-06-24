import React, { useState } from "react";
import "./Sales.css";

function Sales() {
  const salesList = [
    { id: 1, billNo: "INV001", customer: "Raja", date: "23-06-2026", items: 5, amount: 1200, payment: "Cash" },
    { id: 2, billNo: "INV002", customer: "Kumar", date: "23-06-2026", items: 3, amount: 850, payment: "Card" },
    { id: 3, billNo: "INV003", customer: "Arun", date: "22-06-2026", items: 7, amount: 2100, payment: "UPI" },
    { id: 4, billNo: "INV004", customer: "Vijay", date: "22-06-2026", items: 2, amount: 500, payment: "Cash" },
    { id: 5, billNo: "INV005", customer: "Suresh", date: "21-06-2026", items: 4, amount: 1500, payment: "UPI" },
    { id: 6, billNo: "INV006", customer: "Mani", date: "21-06-2026", items: 6, amount: 2200, payment: "Card" },
    { id: 7, billNo: "INV007", customer: "Karthik", date: "20-06-2026", items: 3, amount: 950, payment: "Cash" },
    { id: 8, billNo: "INV008", customer: "Dinesh", date: "20-06-2026", items: 8, amount: 3000, payment: "UPI" },
    { id: 9, billNo: "INV009", customer: "Saravanan", date: "19-06-2026", items: 5, amount: 1750, payment: "Card" },
    { id: 10, billNo: "INV010", customer: "Prakash", date: "19-06-2026", items: 1, amount: 250, payment: "Cash" },
    { id: 11, billNo: "INV011", customer: "Ravi", date: "18-06-2026", items: 4, amount: 1100, payment: "UPI" },
    { id: 12, billNo: "INV012", customer: "Ajith", date: "18-06-2026", items: 2, amount: 600, payment: "Card" },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  // Search Filter
  const filteredSales = salesList.filter((sale) =>
    sale.billNo.toLowerCase().includes(search.toLowerCase()) ||
    sale.customer.toLowerCase().includes(search.toLowerCase()) ||
    sale.payment.toLowerCase().includes(search.toLowerCase()) ||
    sale.date.includes(search)
  );

  // Pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentSales = filteredSales.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredSales.length / recordsPerPage);

  return (
    <div className="sales-container">
      <h2>Sales List</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Bill No, Customer, Date, Payment..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Table */}
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
          {currentSales.length > 0 ? (
            currentSales.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.billNo}</td>
                <td>{sale.customer}</td>
                <td>{sale.date}</td>
                <td>{sale.items}</td>
                <td>₹{sale.amount}</td>
                <td>{sale.payment}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No sales records found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Sales;