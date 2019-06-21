import api from './api';
import { API_KEY } from '../config';
export const POPULAR_MOVIES = 'POPULAR_MOVIES';

const getPolpularMovies = () => ({
    type: POPULAR_MOVIES,
    payload: api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`),
});

export default getPolpularMovies;