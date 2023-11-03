import axios from 'axios';
import {base_url} from '../../../axios/baseUrl';
import { config } from '../../../axios/auth-header'
const login = async (userInfoDTO) => {
  const response = await axios.post(`${base_url}auth/authenticate`, userInfoDTO);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const register = async (userInfoDTO) => {
  const response = await axios.post(`${base_url}userInfoDTO/register`, userInfoDTO);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const authService = {
    login,
    register,
   
  };
  
  export default authService;