import axios from "axios";

const api = axios.create({
    baseURL: "https://mern-backendapi.herokuapp.com"
});

export default api;