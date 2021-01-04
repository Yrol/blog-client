export default async ($axios, store, params, error) => {

  $axios.defaults.baseURL = process.env.API_URL; // base url defined in the .env file

  try{
    const post = await $axios.$get(`/articles/${params.slug}`);
    return {
      post
    }
  } catch (e) {
    throw e
  }
}
