
import { Link } from "react-router-dom";
import "./index.css";
function Index() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
    <aside className="sidebar">
  <h2>POS System</h2>

  <ul>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>

    <li>
      <Link to="/customers">Customers</Link>
    </li>

    <li>
      <Link to="/sales">Sales</Link>
    </li>

    <li>
      <Link to="/reports">Reports</Link>
    </li>

    <li>
      <Link to="/settings">Settings</Link>
    </li>

    <li>
      <Link to="/">Logout</Link>
    </li>
  </ul>
</aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Welcome to POS Management System</p>
        </header>

        <section className="cards">
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
            <h3>Orders</h3>
            <p>45</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;