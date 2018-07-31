import React from "react";
import {Switch,Route, withRouter} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Second from './../pages/Second/Second';
import { connect} from 'react-redux';
import LoginPage from './../pages/login/login';

class RouterPage extends React.Component {
	render () {
		if (this.props.LoginStatus.loginStatus) {
			return (
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/second" component={Second}/>
					<Route component={Home}/>
				</Switch>
			)
		} else {
			return (
				<Switch>
					<Route path="/LoginPage" component={LoginPage}/>
					<Route component={LoginPage}/>
				</Switch>
			)
		}
	}
}

export default withRouter(connect(state => state)(RouterPage))