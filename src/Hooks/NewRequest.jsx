import axios from "axios";

const NewRequest = axios.create({
  baseURL: "https://fsdbookingbackend-2.onrender.com/api/",
  withCredentials: true,
});

export default NewRequest;
