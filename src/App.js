import React from 'react';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
