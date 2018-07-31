import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
import RouterPage from "./router/router"

ReactDOM.render(
	<Provider store = {store}>
		<Router>
			<RouterPage />
		</Router>
    </Provider>,
	document.getElementById('root')
);

