import axios from "axios";

const baseURL = "https://api.github.com/users/"

const api = axios.create({
    baseURL: baseURL,
    
  });
  
  export default api;