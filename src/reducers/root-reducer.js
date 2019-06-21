import {combineReducers} from 'redux';
import trendingMoviesReducer from './trendingMoviesReducer';
import latestMoviesReducer from './latestMoviesReducer';

export default combineReducers({
	trendingMoviesReducer,
	latestMoviesReducer,
});