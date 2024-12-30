import axios from "axios";

const NewRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

export default NewRequest;
