import React from "react";
import style from "./style.module.css";

let Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img className={style.image} src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="men shirt" />
            </div>
            <div className={style.cardinfo}>
                <p className={style.name}>{props.prod.productName}</p>
                <p className={style.company}>{props.prod.productBrand}</p>
                <p className={style.price}>{props.prod.price}</p>
            </div>
        </div>
    )
}

export default Card;