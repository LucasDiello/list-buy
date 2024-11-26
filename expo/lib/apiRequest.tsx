import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://192.168.1.6:4000/api/v1",
  withCredentials: true,
});

export default apiRequest;
  