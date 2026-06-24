import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <div className="settings-card">
        <h3>Store Settings</h3>
        <p>Store Name: POS Management System</p>
        <p>Store Address: Chennai, Tamil Nadu</p>
      </div>

      <div className="settings-card">
        <h3>User Settings</h3>
        <p>Username: Admin</p>
        <p>Email: admin@gmail.com</p>
      </div>

      <div className="settings-card">
        <h3>System Settings</h3>
        <p>Theme: Light Mode</p>
        <p>Language: English</p>
      </div>

      <button className="save-btn">
        Save Changes
      </button>
    </div>
  );
}

export default Settings;