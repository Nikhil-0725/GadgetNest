import React, { useState } from "react";
import style from "./style.module.css";
import { addProduct } from "../../utils/ProductServices";

let AddNewProduct = () => {

    const [formData, setFormData] = useState({  
        typeId:"123",
        productName:"add",
        productBrand:"add",
        description:"",
        price:"001",
        stockQty:"001",
        imagePath:"img"
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addProduct(formData);
    }

    return (
        <div className={style.marginTop}>
            <h1>Add Product</h1>
            <form action="" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>Product Type : </th>
                        <td>
                            <select name="type" id="">
                                <option value="1">Mobile</option>
                                <option value="2">Accessory</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Product Name : </th>
                        <td><input type="text" name="productName" value={formData.productName} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Product Brand : </th>
                        <td><input type="text" name="productBrand" value={formData.productBrand} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Description : </th>
                        <td><textarea name="description" id="" cols="25" rows="5" value={formData.description} onChange={handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <th>Price : </th>
                        <td><input type="number" name="price" value={formData.price} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Stock Quantity : </th>
                        <td><input type="number" name="stockQty" value={formData.stockQty} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Images : </th>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNewProduct;