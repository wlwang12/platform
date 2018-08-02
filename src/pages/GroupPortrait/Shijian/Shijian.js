// react基础依赖
import React from "react";
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';

class Shijian extends React.Component {
    render () {
        return (
            <React.Fragment>
                创新实践页面
            </React.Fragment>
        )
    }
}

export default withRouter(connect(state=>state)(Shijian));