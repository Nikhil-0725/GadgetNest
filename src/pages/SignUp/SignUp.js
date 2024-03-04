import React, { useState } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { addUser } from "../../utils/UserServices";
import { useNavigate } from "react-router-dom";

let SignUp = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        address:"",
        mobileNo:"",
        imagePath:"dummy img",
        roleId:"2"
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        addUser(user)
        .then((res)=>{
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            navigate('/signup');
        })
        
    }

    return (
        <section style={{  
            backgroundImage: "url(https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "100%"
            }} >

            <div className="container h-100" style={{padding: "50px"}}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className={`d-flex justify-content-center ${style.divTable}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>First Name : </th>
                                                    <td><input type="text" name="firstName" value={user.firstName} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Last Name : </th>
                                                    <td><input type="text" name="lastName" value={user.lastName} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Email : </th>
                                                    <td><input type="text" name="email" value={user.email} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Address : </th>
                                                    <td><input type="text" name="address" value={user.address} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Phone No. : </th>
                                                    <td><input type="text" name="mobileNo" value={user.mobileNo} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Password : </th>
                                                    <td><input type="text" name="password" value={user.password} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Confirm Password : </th>
                                                    <td><input type="text" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-3">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="accept" />
                                        <label className="form-check-label" htmlFor="accept">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="reset" className="btn btn-primary btn-lg">Reset All</button>
                                        <button type="submit" className="btn btn-success btn-lg">Register</button>
                                    </div>

                                    <p className="text-center text-muted mt-3 mb-0">Have already an account? <NavLink to="/signin"
                                        className="fw-bold text-body"><u>Login here</u></NavLink></p>

                                    <p className="text-center text-muted mt-3 mb-0">Go To Home Page? <NavLink to="/"
                                        className="fw-bold text-body"><u>Home Page</u></NavLink></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignUp;