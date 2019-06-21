import api from './api';
import { API_KEY } from '../config';
export const GET_GENRES = 'GET_GENRES';

const getGenres = () => ({
    type: GET_GENRES,
    payload: api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`),
});

export default getGenres;