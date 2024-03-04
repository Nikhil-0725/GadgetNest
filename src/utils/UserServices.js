import axios from "axios";

let baseUrl = "http://localhost:8080/user";

let getUserByEmail = (email, password) => {
    return axios.get(baseUrl + `/login/${email}/${password}`);
}

let addUser = (user) => {
    return axios.post(baseUrl + '/add', user)
}

export { getUserByEmail, addUser }