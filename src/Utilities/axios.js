import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  // baseURL: "https://pacific-mountain-56378.herokuapp.com",
});
export default axiosInstance;
