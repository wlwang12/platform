// react基础依赖
import React from "react";
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
// 引入antd组建
import { Breadcrumb } from 'antd';
// 引入当前页面样式
import './GroupPortrait.css'

class GroupPortrait extends React.Component {
    render () {
        return (
            <div className="groupportrait">
                    <Breadcrumb  className="breadcrumb">
                        <Breadcrumb.Item>综合画像</Breadcrumb.Item>
                        <Breadcrumb.Item>群体画像</Breadcrumb.Item>
                    </Breadcrumb>
                <div> 群体画像 </div>
            </div>
        )
    }
}

export default withRouter(connect(state=>state)(GroupPortrait));

