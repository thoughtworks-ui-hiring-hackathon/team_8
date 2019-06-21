import api from './api';
import { API_KEY } from '../config';
export const TRENDING_MOVIES = 'TRENDING_MOVIES';

const getTrendingMovies = () => ({
	type: TRENDING_MOVIES,
	payload: api.get(`trending/movie/week?api_key=${API_KEY}`),
});

export default getTrendingMovies;