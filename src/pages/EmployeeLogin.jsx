import { useState } from 'react';
import "./EmployeeLogin.css";
import axios from "axios";
 import Dashboard from './Dashboard';
 

export default function EmployeeLogin() {
  const [activeTab, setActiveTab] = useState("employee");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false); // لتتبع تسجيل الدخول

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post("http://localhost:3001/login", {
    email: form.email,
    password: form.password,
  })
  .then((res) => {

    if (res.data.status === "success") {

      const role = res.data.role;

      if (role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }

    } else {
      alert("Invalid email or password");
    }

  })
  .catch((err) => {
    console.log(err);
    alert("Server error");
  });
};

  return (
    <section className='emp-login'>
      <div className='emp-login__card'>
        <img src="/assets/img/logo/logo2.jpg" alt="logo" />

        {/* Tabs */}
        <div className="emp-tabs">
          <button 
            className={activeTab === "employee" ? "active" : ""}
            onClick={() => setActiveTab("employee")}
          >
            Employee/Supplier
          </button>
          <button 
            className={activeTab === "Supplier" ? "active" : ""}
            onClick={() => setActiveTab("Supplier")}
          >
            Admin
          </button>
        </div>

        <h2>{activeTab === "employee" ? "Employee Login" : "Supplier Login"}</h2>

        <form onSubmit={handleSubmit}>
          <div className='emp-field'>
            <label>Email</label>
            <input
              type="email"
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email'
            />
          </div>

          <div className='emp-field'>
            <label>Password</label>
            <input
              type="password"
              name='password'
              required
              value={form.password}
              onChange={handleChange}
              placeholder='Enter Password'
            />
          </div>

          <button type='submit' className='emp-btn'>
            Login
          </button>
        </form>

      </div>
    </section>
  );
}