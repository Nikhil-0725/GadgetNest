import Card from "../Card/Card";
import { getAllProducts } from "../../utils/ProductServices";
import style from "./style.module.css"
import React, { useEffect, useState } from "react";

let AccesoryList = () => {

    const [accList, accMobList] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState("Loading Accesories... Please Wait...");

    useEffect(() => {
        getAllProducts()
            .then((result) => {
                accMobList(result.data);
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
                accList &&
                <div>
                    <div>
                        {accList.map(p =>
                            <Card prod={p} key={p.productId} className={style.cardDisplay}></Card>
                        )}
                    </div>
                </div>
            }

        </div>
    )
}

export default AccesoryList;