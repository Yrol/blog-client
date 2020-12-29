export default async ($axios, params, error) => {

  $axios.defaults.baseURL = process.env.API_URL; // base url defined in the .env file

  const allPosts = await $axios.$get(`/articles?page=${params.page}`);

  if (!allPosts.data.length) {
    throw error({ statusCode: 404, message: 'No articles found!' });
  }

  return {
    allPosts
  }
}
