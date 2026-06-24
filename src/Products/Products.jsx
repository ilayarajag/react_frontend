import React from "react";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      code: "P001",
      name: "Rice 1 KG",
      category: "Grocery",
      price: 60,
      stock: 120,
    },
    {
      id: 2,
      code: "P002",
      name: "Milk 500 ML",
      category: "Dairy",
      price: 30,
      stock: 80,
    },
    {
      id: 3,
      code: "P003",
      name: "Sugar 1 KG",
      category: "Grocery",
      price: 45,
      stock: 150,
    },
    {
      id: 4,
      code: "P004",
      name: "Tea Powder",
      category: "Beverages",
      price: 120,
      stock: 50,
    },
  ];

  return (
    <div className="products-container">
      <h5>Product List</h5>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search product..."
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Stock Qty</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;