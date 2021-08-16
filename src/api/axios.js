import axios from "axios";
import { apiBaseUrl } from './base-urls';


const instance = axios.create({
  baseURL: apiBaseUrl,
});

// instance.get("/foo_bar"); // https://api.themoviedb.org/3/foo_bar

export default instance;