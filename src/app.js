import React, {Component} from 'react';
import './scss/style.scss';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
	render() {
		console.log(this.props);
		const { trendingMovies } = this.props;
		return (
			<div className="App">
				<NavBar trendingMovies={trendingMovies}/>
			</div>
		);
	}
}

export default App;
