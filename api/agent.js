import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = process.env.API_URL; // base url defined in the .env file

axios.interceptors.request.use((config) => {

  //Grab the token from localStorage pass it along with the request header as Bearer
  const token = this.$auth.getToken('local');
  if (token) {
      config.headers.Authorization = token
  }
  return config;
},error => {
  //"Promise.reject" returns a Promise object that is rejected with a given reason - Promise.reject(reason)
  return Promise.reject(error)
})
