import React, { useState } from "react";
import "./Products.css";

import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  const products = [
    { id: 1, code: "P001", name: "Rice 1 KG", category: "Grocery", price: 60, stock: 120 },
    { id: 2, code: "P002", name: "Milk 500 ML", category: "Dairy", price: 30, stock: 80 },
    { id: 3, code: "P003", name: "Sugar 1 KG", category: "Grocery", price: 45, stock: 150 },
    { id: 4, code: "P004", name: "Tea Powder", category: "Beverages", price: 120, stock: 50 },
    { id: 5, code: "P005", name: "Oil 1 L", category: "Grocery", price: 180, stock: 70 },
    { id: 6, code: "P006", name: "Coffee", category: "Beverages", price: 200, stock: 40 },
    { id: 7, code: "P007", name: "Bread", category: "Bakery", price: 35, stock: 90 },
    { id: 8, code: "P008", name: "Butter", category: "Dairy", price: 90, stock: 60 },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.code.toLowerCase().includes(search.toLowerCase()) ||
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="products-container">
      <h2>Product List</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search code, name, category..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Table */}
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
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>
                <td>
           <button
  className="edit-btn"
  onClick={() => handleEdit(product.id)}
>
  Edit
</button>

<button
  className="delete-btn"
  onClick={() => handleDelete(product.id)}
>
  Delete
</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No products found</td>
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

export default Products;