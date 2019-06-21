import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/style.scss';
import {simpleAction} from './actions/simple-action';
import NavBar from './components/NavBar/NavBar';


class App extends Component {

	simpleAction = event => this.props.simpleAction();

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
	simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
