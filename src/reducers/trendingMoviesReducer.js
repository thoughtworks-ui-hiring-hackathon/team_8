import {TRENDING_MOVIES} from '../actions/getTrendingMovies';

export default (state = {}, action) => {
	console.log('reducer', action, state);
	switch (action.type) {

		case TRENDING_MOVIES:
			return {
				result: action.payload
			}

		default:
			return state
	}
}