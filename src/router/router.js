import React from "react";
import asyncComponent from '../utills/asyncComponent';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from './../components/loading/loading';

// 获取到异步组件
const Home = asyncComponent(() => import('../pages/Home/Home'));
const Second = asyncComponent(() => import('../pages/Second/Second'));
const LoginPage = asyncComponent(() => import('../pages/login/login'));

class RouterPage extends React.Component {
    render() {
        if (this.props.LoginStatus.loginStatus) {
            return (
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/second" component={Second}/>
                        <Route component={Home}/>
                    </Switch>
                    <Loading/>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Switch>
                        <Route path="/LoginPage" component={LoginPage}/>
                        <Route component={LoginPage}/>
                    </Switch>
                    <Loading/>
                </React.Fragment>
            );
        }
    }
}

export default withRouter(connect(state => state)(RouterPage));