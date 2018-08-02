// react基础依赖
import React from "react";
// 路由组建
import {withRouter, NavLink, Switch, Route} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
// // 按需加载组建
import asyncComponent from '../../../utills/asyncComponent';
// 引入当前页面样式
import './Gaikuang.css'

// 获取到异步组件
const Zonghe = asyncComponent(() => import('./Zonghe/Zonghe'));
const Chengji = asyncComponent(() => import('./Chengji/Chengji'));
const Zhaosheng = asyncComponent(() => import('./Zhaosheng/Zhaosheng'));
const Jiuye = asyncComponent(() => import('./Jiuye/Jiuye'));

class Gaikuang extends React.Component {
    render () {
        return (
            <div className="Gaikuang">

                <div className="tabs">
                    <NavLink to="/mainframe/groupportrait/gaikuang/zonghe" autoCorrect>
                        <span> 综合分析</span>
                    </NavLink>
                    <span>/</span>
                    <NavLink to="/mainframe/groupportrait/gaikuang/chengji">
                        <span>成绩分析</span>
                    </NavLink>
                    <span>/</span>
                    <NavLink to="/mainframe/groupportrait/gaikuang/zhaosheng">
                        <span>招生分析</span>
                    </NavLink>
                    <span>/</span>
                    <NavLink to="/mainframe/groupportrait/gaikuang/jiuye">
                        <span>就业分析</span>
                    </NavLink>
                </div>

                <Switch>
                    <Route path="/mainframe/groupportrait/gaikuang/zonghe" component={Zonghe} />
                    <Route path="/mainframe/groupportrait/gaikuang/chengji" component={Chengji} />
                    <Route path="/mainframe/groupportrait/gaikuang/zhaosheng" component={Zhaosheng} />
                    <Route path="/mainframe/groupportrait/gaikuang/jiuye" component={Jiuye} />
                    <Route component={Zonghe} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(state=>state)(Gaikuang));