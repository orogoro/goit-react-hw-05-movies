import axios from 'axios';

const KEY_API = 'a8a4168eeeb623f39ee02028275e7a3e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendFilms() {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY_API}`);
  return response.data.results;
}
export async function getTrendFilmById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${KEY_API}`);
  return response.data;
}
export async function getCreditsById(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${KEY_API}`);
  return response.data.cast;
}
export async function getReviewsById(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${KEY_API}`);
  return response.data.results;
}
export async function getFetchFilms(item) {
  const response = await axios.get(
    `/search/movie?api_key=${KEY_API}&query=${item}`
  );
  return response.data.results;
}
