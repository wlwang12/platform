import React from "react";
import {Switch,Route, withRouter} from 'react-router-dom';
import Home from '../pages/Home/Home.bundle';
import Second from './../pages/Second/Second.bundle';
import { connect} from 'react-redux';
import LoginPage from './../pages/login/login.bundle';
import Loading from './../components/loading/loading';
import lazyLoad from '../utills/lazyLoad';

class RouterPage extends React.Component {
	render () {
		if (this.props.LoginStatus.loginStatus) {
			return (
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={lazyLoad(Home)}/>
						<Route path="/second" component={lazyLoad(Second)}/>
						<Route component={lazyLoad(Home)}/>
					</Switch>
					<Loading />
				</React.Fragment>
			)
		} else {
			return (
				<React.Fragment>
					<Switch>
						<Route path="/LoginPage" component={lazyLoad(LoginPage)}/>
						<Route component={lazyLoad(LoginPage)}/>
					</Switch>
					<Loading />
				</React.Fragment>
			)
		}
	}
}

export default withRouter(connect(state => state)(RouterPage))