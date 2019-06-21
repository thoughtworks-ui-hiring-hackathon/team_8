import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/style.scss';
import {getTrendingMovies} from './actions/getTrendingMovies';
import NavBar from './components/NavBar/NavBar';


class App extends Component {

	getTrendingMovies = event => this.props.getTrendingMovies();

	render() {
		return (
			<div className="App">
				<NavBar />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	getTrendingMovies: () => dispatch(getTrendingMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
