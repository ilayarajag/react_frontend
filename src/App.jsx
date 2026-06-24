// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [isLogin, setIsLogin] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     place: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(isLogin ? "Login Data:" : "Registration Data:", form);
//     alert(isLogin ? "Login Successful!" : "Registration Successful!");
//   };

//   return (
//     <div className="container">
//       <div className="image-section">
//         <img src="/register.png" alt="Authentication" />
//       </div>

//       <section id="left">
//         {/* Toggle Buttons */}
//         <div className="toggle">
//           <button type="button" onClick={() => setIsLogin(false)}>
//             User Register
//           </button>

//           <button type="button" onClick={() => setIsLogin(true)}>
//             user Login
//           </button>
//         </div>

//         <h2>{isLogin ? "Login Page" : "Registration Page"}</h2>

//         <form onSubmit={handleSubmit}>

//           {/* Register only fields */}
//           {!isLogin && (
//             <>
//               <div className="form-group">
//                 <label>Name :</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Place :</label>
//                 <input
//                   type="text"
//                   name="place"
//                   value={form.place}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Role :</label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={form.role}
//                   onChange={handleChange}
//                 />
//               </div>
//             </>
//           )}

//           {/* Common fields */}
//           <div className="form-group">
//             <label>Email :</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password :</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Products/Products";
 import Customers from "./Customers/Customers";
import Sales from "./Sales/Sales";
import Reports from "./Reports/Reports";
 import Settings from "./Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="sales" element={<Sales />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} /> 
      </Route>
    </Routes>
  );
}

export default App;