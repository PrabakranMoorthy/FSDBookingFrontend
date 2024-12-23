import axios from "axios";

const NewRequest = axios.create({
  baseURL: "https://fsdbookingbackend-1.onrender.com/api/",
  withCredentials: true,
});

export default NewRequest;
