import axios from 'axios';

const BASE_URI = 'https://www.meteoblue.com/en/server';

export function setTokenToHeader(token: string) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function callAPI(method: string, path: string, data: any) {
  return new Promise((resolve: Function, reject: Function) => {
    let apiCall: Promise<any>;
    switch (method.toLowerCase()) {
      case 'post':
        apiCall = axios.post(`${BASE_URI}${path}`, data);
        break;
      case 'put':
        apiCall = axios.put(`${BASE_URI}${path}`, data);
        break;
      case 'patch':
        apiCall = axios.patch(`${BASE_URI}${path}`, data);
        break;
      case 'delete':
        apiCall = axios.delete(`${BASE_URI}${path}`, data);
        break;
      default:
        apiCall = axios.get(`${BASE_URI}${path}`, data);
        break;
    }
    return apiCall
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
