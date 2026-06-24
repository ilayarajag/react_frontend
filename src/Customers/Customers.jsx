import React, { useState } from "react";
import "./Customers.css";

function Customers() {
  const customers = [
    { id: 1, name: "Raja", mobile: "9876543210", email: "raja@gmail.com", place: "Chennai" },
    { id: 2, name: "Kumar", mobile: "9876543211", email: "kumar@gmail.com", place: "Coimbatore" },
    { id: 3, name: "Arun", mobile: "9876543212", email: "arun@gmail.com", place: "Madurai" },
    { id: 4, name: "Mani", mobile: "9876543213", email: "mani@gmail.com", place: "Salem" },
    { id: 5, name: "Suresh", mobile: "9876543214", email: "suresh@gmail.com", place: "Trichy" },
    { id: 6, name: "Vijay", mobile: "9876543215", email: "vijay@gmail.com", place: "Erode" },
    { id: 7, name: "Ajith", mobile: "9876543216", email: "ajith@gmail.com", place: "Tiruppur" },
    { id: 8, name: "Karthik", mobile: "9876543217", email: "karthik@gmail.com", place: "Chennai" },
    { id: 9, name: "Ravi", mobile: "9876543218", email: "ravi@gmail.com", place: "Madurai" },
    { id: 10, name: "Prakash", mobile: "9876543219", email: "prakash@gmail.com", place: "Coimbatore" },
    { id: 11, name: "Dinesh", mobile: "9876543220", email: "dinesh@gmail.com", place: "Salem" },
    { id: 12, name: "Saravanan", mobile: "9876543221", email: "saravanan@gmail.com", place: "Trichy" }
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  // Search Filter
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.mobile.includes(search) ||
    customer.email.toLowerCase().includes(search.toLowerCase()) ||
    customer.place.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentCustomers = filteredCustomers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    filteredCustomers.length / recordsPerPage
  );

  return (
    <div className="customer-container">
      <h2>Customer List</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name, mobile, email, place..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Table */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Place</th>
          </tr>
        </thead>

        <tbody>
          {currentCustomers.length > 0 ? (
            currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.mobile}</td>
                <td>{customer.email}</td>
                <td>{customer.place}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No customers found</td>
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

export default Customers;