// react基础依赖
import React from "react";
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';

class Zhaosheng extends React.Component {
    render () {
        return (
            <React.Fragment>
                Zhaosheng
            </React.Fragment>
        )
    }
}

export default withRouter(connect(state=>state)(Zhaosheng));