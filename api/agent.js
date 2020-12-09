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
  if (error.message === "Network Error" && !error.response) {

  }

  //exposing the properties of the error response values such as header, data & etc
  const { status, data, config, headers } = error.response;

  console.log(status)

  if (status === 404) {
    //throw error; will be caught by the "activityStore"
  }

  //handling the token expiry (the API has been programmed to exposed to headers -"www-authenticate" ) error
  if (
    status === 401 &&
    headers["www-authenticate"].includes(
      'Bearer error="invalid_token", error_description="The token expired at"'
    )
  ) {

  }

  //handling the 500 server errors using the "react-toastify" library  (ActivityDetails for now)
  if (status === 500) {

  }

  //error response will throw a proper error response
  throw error.response;

});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody)
}

const Posts = {
  posts: () => axios.get('/articles').then(responseBody),
  details: (id) => requests.get(`/articles/${id}`),
  create: (post) => requests.post('/articles', post),
  update: (post) => requests.put(`/articles/${post.id}`, post),
  delete: (id) => requests.del(`/articles/${id}`),
}

const Categories = {
  categories: () => axios.get('categories/active').then(responseBody),
}

export default{
  Posts,
  Categories
}
