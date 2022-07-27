import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENTRYPOINT;
const baseURLImage = process.env.REACT_APP_API;

const api = axios.create({
  baseURL,
});

export { api, baseURL, baseURLImage };