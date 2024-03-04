import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import React from "react";


let HeaderBar = () => {
    return (
        <div>
            <header className={style.topbar}>
                <div className={style.logo}>
                    <h4>GADGETNEST</h4>
                </div>

                <ul className={style.navlink}>
                    <li>
                        <NavLink to="/" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Mobile</NavLink>
                    </li>
                    <li>
                        <NavLink href="" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Accesories</NavLink>
                    </li>
                </ul>

                <div>
                    <input type="text" />
                    <button type="button">search</button>
                </div>

                <div className={style.icons}>
                    <NavLink href="" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Cart</NavLink>
                    <NavLink href="" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Orders</NavLink>
                    <NavLink to="/signin" style={{textDecoration:"none", fontSize:"large", color:"gray"}}>Login</NavLink>
                    {/* <img src="" alt="..." /> */}
                </div>
            </header>
        </div>
    )
}

export default HeaderBar;