import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reduxEnhancer = composeEnhancers(
	applyMiddleware(thunk)
)


export default function configureStore(initialState = {}) {
	return createStore(
		rootReducer,
		initialState,
		reduxEnhancer
	);
}