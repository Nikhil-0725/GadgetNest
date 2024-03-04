import React from "react";
import style from "./style.module.css"
import MobileList from "../../components/MobilesDisplay/MobileList";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import AccesoryList from "../../components/AccesoriesDisplay/AccesoryList";

let ProductsDisplay = () => {
    return (
        <div>
            <HeaderBar></HeaderBar>
            <div className={style.cardsDisplay}>
                <h1>Products</h1>
                <h2 style={{textAlign:"left",marginLeft:"10%"}}>Mobiles</h2>
                <div className="container border border-dark rounded overflow-auto" style={{marginBottom:"50px"}}>
                    <MobileList />
                </div>
                <h2 style={{textAlign:"left",marginLeft:"10%"}}>Accesories</h2>
                <div className="container border border-dark rounded overflow-auto" style={{marginBottom:"50px"}}>
                <AccesoryList />
                </div>
            </div>
        </div>
    )
}

export default ProductsDisplay;