import axios from "axios";

const API = axios.create({
    baseURL: "http://3.110.221.1:5000",

    withCredentials: true,
});

export default API;
