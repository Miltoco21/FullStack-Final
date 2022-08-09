import axios from "axios";

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    'Content-type': 'application/json; charset = UTF-8'
  }
});
export default clientAxios