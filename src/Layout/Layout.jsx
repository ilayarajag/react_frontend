import { Link, Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
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

      {/* Page Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;