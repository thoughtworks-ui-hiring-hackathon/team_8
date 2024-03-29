import {combineReducers} from 'redux';
import trendingMoviesReducer from './trendingMoviesReducer';
import latestMoviesReducer from './latestMoviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import popularMoviesReducer from './popularMoviesReducer';
import genresReducer from './genresReducer';
import searchMoviesReducer from './searchMoviesReducer';

export default combineReducers({
	trendingMoviesReducer,
	latestMoviesReducer,
	movieDetailsReducer,
	popularMoviesReducer,
	genresReducer,
	searchMoviesReducer,
});