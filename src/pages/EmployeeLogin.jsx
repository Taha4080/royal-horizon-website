import { useState } from 'react';
import "./EmployeeLogin.css";
import { Form } from 'react-router-dom';

export default function EmployeeLogin() {

const [form , setForm] = useState({
    email: "",
    password: "",
});

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target,value });
    };

const handleSubmit = (e) => {
    e.preventDefault();
    if (Form.email === "admin@company.com" && form.password === "12345678") {
        alert("Login Successful");
    }else {
        alert("Invalid Credentials");
    }
}


  return (
 
    <section className='emp-login'>
        <div className='emp-login__card'>
            <img src="/assets/img/logo/logo2.jpg" alt="" />
            <h2>Employee Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='emp-field'>
                    <label>Email</label>
                    <input type="email" name='email' required value={form.email} onChange={handleChange} placeholder='Enter Your Company Email'/>
                </div>
                <div className='emp-field'>
                    <label>Password</label>
                    <input type="password"  name='password' required value={form.passwoed} onChange={handleChange} placeholder='Enter Password'/>
                </div>

                <button type='submit' className='emp-btn'>Login</button>
            </form>
        </div>
    </section>
  );
}

