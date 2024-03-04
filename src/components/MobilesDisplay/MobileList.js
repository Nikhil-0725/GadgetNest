import Card from "../Card/Card";
import { getAllProducts } from "../../utils/ProductServices";
import style from "./style.module.css"
import React, { useEffect, useState } from "react";

let MobileList = () => {

    const [mobList, setMobList] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState("Loading Mobiles... Please Wait...");

    useEffect(() => {
        getAllProducts()
            .then((result) => {
                setMobList(result.data);
            })
            .catch((err) => {
                setErr(err.message);
            })
            .finally(() => {
                setLoading(null);
            })
    }, [])

    return (
        <div className={style.cardsDisplay}>

            {
                loading &&
                <h1>{loading}</h1>
            }
            {
                err &&
                <h1>{err}</h1>
            }

            {
                mobList && 
                <div>
                    <div>
                        {mobList.map(p =>
                            <Card prod={p} key={p.productId} className={style.cardDisplay}></Card>
                        )}
                    </div>

                </div>
            }




        </div>
    )
}

export default MobileList;
