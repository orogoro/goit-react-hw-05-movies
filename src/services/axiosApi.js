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
