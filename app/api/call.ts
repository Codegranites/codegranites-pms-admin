import axios, { AxiosInstance } from 'axios';

const Calls = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    timeout: 300000,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      credentials: 'include'
    }
    // withCredentials: true,
  });
};

export default Calls;
