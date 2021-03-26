import axios from "axios";

const url = "http://localhost:8000/api";
let token = "dczOkHAgTcsWGRFiuyOBK7gWYrClOTQ1jC6x0vf1";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
