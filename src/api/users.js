import axios from "axios";

const API_URL = "http://localhost:3001";

const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export { getUsers };