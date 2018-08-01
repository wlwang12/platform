// 引入react基础
import React from 'react';
// 路由组建
import {Switch, Route, withRouter} from 'react-router-dom';
// 引入状态管理组建
import {connect} from "react-redux";
// 按需加载组建
import asyncComponent from '../../utills/asyncComponent';
// 引入美化滚动条组建
import { Scrollbars } from 'react-custom-scrollbars';
// 引入当前页面样式
import './rightcomponent.css'

// 获取到异步组件
const GroupPortrait = asyncComponent(() => import('./../../pages/GroupPortrait/GroupPortrait'));
const PersonalPortrait = asyncComponent(() => import('./../../pages/PersonalPortrait/PersonalPortrait'));
const Test = asyncComponent(() => import('./../../pages/Test/Test'));

class RightComponent extends React.Component{
    render () {
        return (
            <div className={'rightcomponent'}>

                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    style={{ width: "100%", height: "100%" }}>
                    <Switch>
                        <Route path="/mainframe/groupportrait" component={GroupPortrait}/>
                        <Route path="/mainframe/personalportrait" component={PersonalPortrait}/>
                        <Route path="/mainframe/test" component={Test}/>
                        <Route component={GroupPortrait}/>
                    </Switch>
                </Scrollbars>
                
            </div>
        )
    }
}

export default withRouter(connect(state => state)(RightComponent))