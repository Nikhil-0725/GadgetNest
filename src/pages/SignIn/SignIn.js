import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { getUserByEmail } from "../../utils/UserServices";
import  { NavLink, useNavigate } from 'react-router-dom'

let SignIn = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const [user1, setUser1] = useState(null);



    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        console.log(user);
        
        getUserByEmail(user.email, user.password)
        .then((result) => {
            setUser1(result.data);
            console.log(result.data)
            navigate('/');
        })
        .catch((err) => {
            setUser1(null);
        })

        
    }


    return (
        <section className="vh-100 jumbotron" style={{  
            backgroundImage: "url(https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "100%"
            }} >

            <div className="container h-100" style={{padding: "50px"}}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Log-In</h2>

                                <form>
                                    <div className={`d-flex justify-content-center ${style.divTable}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Email : </th>
                                                    <td><input type="text" name="email" value={user.email} onChange={handleChange} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Password : </th>
                                                    <td><input type="text" name="password" value={user.password} onChange={handleChange} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <br />


                                    <div className="d-flex justify-content-center">
                                        <button type="reset" className="btn btn-primary btn-lg">Reset All</button>
                                        <button type="button" className="btn btn-success btn-lg" onClick={handleSubmit}>Login</button>
                                    </div>

                                    <p className="text-center text-muted mt-3 mb-0">Don't Have An Account? <NavLink to="/signup"
                                        className="fw-bold text-body"><u>SignUp here</u></NavLink></p>

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

export default SignIn;