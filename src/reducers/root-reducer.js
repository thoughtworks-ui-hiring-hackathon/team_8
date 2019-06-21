import {combineReducers} from 'redux';
import trendingMoviesReducer from './trendingMoviesReducer';
import latestMoviesReducer from './latestMoviesReducer';
import movieDetailsReducer from './movieDetailsReducer';

export default combineReducers({
	trendingMoviesReducer,
	latestMoviesReducer,
	movieDetailsReducer,
});