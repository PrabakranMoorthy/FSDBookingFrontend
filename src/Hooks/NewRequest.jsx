import axios from "axios";
import { host } from "Config";
const NewRequest = axios.create({
  baseURL: `${host}/api/`,
  withCredentials: true,
});

export default NewRequest;
