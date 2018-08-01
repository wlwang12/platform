import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Layout } from 'antd';
import './topcomponent.css'
import logo from './logo.png'
import tx from './tx.png'

class TopComponent extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            username: '李子璇'
        }
    };
    render () {
        return (
            <div className='topcomponent'>
                {/* logo */}
                <img src={logo} className="logo" alt=""/>
                {/* 项目名称 */}
                <p>南京工程大数据应用平台</p>
                {/* 登录退出 */}
                <i className="signout iconfont icon-dengchutuichuguanbi"></i>
                {/* 用户头像 */}
                <div className='touxiang'>
                    <img src={tx} alt=""/>
                </div>
                {/* 用户名称 */}
                <span className="username">欢迎，{this.state.username}</span>
            </div>
        )
    }
}

export default withRouter(connect(state => state)(TopComponent))