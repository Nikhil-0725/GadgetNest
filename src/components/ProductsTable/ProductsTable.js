import { getAllProducts } from "../../utils/ProductServices";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

let ProductsTable = () => {
    const [prodList, setProdList] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState("Loading Page... Please Wait...");

    useEffect(() => {
        getAllProducts()
            .then((result) => {
                setProdList(result.data);
            })
            .catch((err) => {
                setErr(err.message);
            })
            .finally(() => {
                setLoading(null);
            })
    }, [])

    return (
        <div className={style.tableDisplay}>
            {
                loading &&
                <h1>{loading}</h1>
            }
            {
                err &&
                <h1>{err}</h1>
            }
            {
                prodList &&

                <div className="container">
                    <h1>Product List</h1>
                    <hr />
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock Quantity</th>
                                <th>Type</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prodList.map((p) =>
                                    <tr key={p.productId}>
                                        <th>{p.productId}</th>
                                        <th>{p.productName}</th>
                                        <th>{p.productBrand}</th>
                                        <th>{p.price}</th>
                                        <th>{p.stockQty}</th>
                                        <th>{p.types.typeName}</th>
                                        <th><button type="button">Edit</button></th>
                                        <th><button type="button">Delete</button></th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default ProductsTable;