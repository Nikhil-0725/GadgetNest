import React from "react";
import style from "./style.module.css"

let EditDetails = () => {
    return (
        <div className={style.marginTop}>
            <h1>Edit Product</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Product Id : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Product Type : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Product Name : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Product Brand : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Description : </th>
                        <td><input type="textarea" /></td>
                    </tr>
                    <tr>
                        <th>Price : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Stock Quantity : </th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Images : </th>
                        <td></td>
                    </tr>
                    <tr>
                        <td><button type="button">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EditDetails;