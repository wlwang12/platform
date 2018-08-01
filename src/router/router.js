// react基础依赖
import React from "react";
// 按需加载组建
import asyncComponent from '../utills/asyncComponent';
// 路由组建
import {Switch, Route, withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
// 加载动画组建
import Loading from './../components/loading/loading';

// 获取到异步组件
const Home = asyncComponent(() => import('../pages/Home/Home'));
const MainFrame = asyncComponent(() => import('../pages/Main/Main'));
const LoginPage = asyncComponent(() => import('../pages/login/login'));

// 定义路由配置组建
// 根据状态管理配置不同的路由
class RouterPage extends React.Component {
    render() {
    	console.log(this.props);
        if (this.props.LoginStatus.loginStatus) {
            // 已登录状态下，进入首页面
            return (
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/mainframe" component={MainFrame}/>
                        <Route component={Home}/>
                    </Switch>
                    <Loading/>
                </React.Fragment>
            );
        } else {
            // 未登录状态下进入登录界面
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

// 组建连接状态管理，并更新路由配置
export default withRouter(connect(state => state)(RouterPage));