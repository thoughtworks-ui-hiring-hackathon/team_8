import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_index.css';
import App from './app';
import { MovieDetailsPage } from './scenes/MovieDetailsPage';
import { ActorDetails } from './scenes/ActorDetails/ActorDetails';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route exact path="/" component={App} />
			<Route path="/movie/:id" component={MovieDetailsPage} />
			<Route path="/actor/:id" component={ActorDetails} />
		</Router>
	</Provider>,
	document.getElementById('root')
);