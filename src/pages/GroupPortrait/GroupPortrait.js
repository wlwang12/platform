// react基础依赖
import React from "react";
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';

class GroupPortrait extends React.Component {
    render () {
        return (
            <div> 群体画像 </div>
        )
    }
}

export default withRouter(connect(state=>state)(GroupPortrait));

