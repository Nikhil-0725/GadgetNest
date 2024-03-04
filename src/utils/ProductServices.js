import axios from "axios";

let baseUrl = "http://localhost:8080/product";

const getAllProducts = () => {
    return axios.get(baseUrl + `/display`);
}

const getProductById = (id) => {
    return axios.get(baseUrl + `/display/${id}`);
}

const deleteProduct = () => {
    return axios.get(baseUrl + `/`);
}

const addProduct = (formData) => {
    console.log(formData + "from addProd");
    return axios.post(baseUrl + `/add`, formData);
}

export { getAllProducts, getProductById, deleteProduct, addProduct };