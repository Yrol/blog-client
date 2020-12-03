import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = process.env.API_URL; // base url defined in the .env file

axios.interceptors.request.use((config) => {

  //Grab the token from localStorage pass it along with the request header as Bearer
  const token = window.localStorage.getItem("auth._token.local");
  if (token) {
      config.headers.Authorization = token
  }
  return config;
},error => {
  //"Promise.reject" returns a Promise object that is rejected with a given reason - Promise.reject(reason)
  return Promise.reject(error)
})

axios.interceptors.response.use(undefined, error => {

  console.log(error);

});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),// taking only 1 argument - url
  post: (url, body) => axios.post(url, body).then(responseBody), //taking 2 arguments - url & body
  put: (url, body) => axios.put(url, body).then(responseBody), //taking 2 arguments - url & body
  del: (url) => axios.delete(url).then(responseBody)
}

const Posts = {
  posts: () => axios.get('/articles').then(responseBody),
  details: (id) => requests.get(`/articles/${id}`), //accepts a string argument
  create: (post) => requests.post('/articles', post), //accepts an IActivity as argument
  update: (post) => requests.put(`/articles/${post.id}`, post), //accepts an IActivity as argument
  delete: (id) => requests.del(`/articles/${id}`),  //accepts a string argument
}

export default{
  Posts
}
