import api from './api';
import { API_KEY } from '../config';
export const MOVIE_DETAILS = 'MOVIE_DETAILS';

const getMovieDetails = movie_id => ({
    type: MOVIE_DETAILS,
    payload: api.get(`movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`),
});

export default getMovieDetails;