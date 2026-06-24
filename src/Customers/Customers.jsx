
 import React from "react";
 import "./Customers.css";
function Customers() {
  const customers = [
    {
      id: 1,
      name: "Raja",
      mobile: "9876543210",
      email: "raja@gmail.com",
      place: "Chennai",
    },
    {
      id: 2,
      name: "Kumar",
      mobile: "9876543211",
      email: "kumar@gmail.com",
      place: "Coimbatore",
    },
    {
      id: 3,
      name: "Arun",
      mobile: "9876543212",
      email: "arun@gmail.com",
      place: "Madurai",
    },
  ];

  return (
    <div>
      <h1>Customer List</h1>

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
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.mobile}</td>
              <td>{customer.email}</td>
              <td>{customer.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;