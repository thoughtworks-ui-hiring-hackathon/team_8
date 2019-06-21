import api from './api';
import { API_KEY } from '../config';
export const LATEST_MOVIES = 'LATEST_MOVIES';

const getLatestMovies = () => ({
    type: LATEST_MOVIES,
    payload: api.get(`movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false`),
});

export default getLatestMovies;