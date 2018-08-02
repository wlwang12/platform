// react基础依赖
import React from "react";
// 路由组建
import {Switch, Route, withRouter, NavLink} from 'react-router-dom';
// 按需加载组建
import asyncComponent from '../../utills/asyncComponent';
// 状态管理组建
import {connect} from 'react-redux';
// 引入antd组建
import { Breadcrumb, Select, Button, Menu } from 'antd';
// 引入当前页面样式
import './GroupPortrait.css'

// 获取到异步组件
const Gaikuang = asyncComponent(() => import('./Gaikuang/Gaikuang'));
const Jiangxuejin = asyncComponent(() => import('./Jiangxuejin/Jiangxuejin'));
const Qingxiaojia = asyncComponent(() => import('./Qingxiaojia/Qingxiaojia'));
const Shijian = asyncComponent(() => import('./Shijian/Shijian'));
const Zhengshu = asyncComponent(() => import('./Zhengshu/Zhengshu'));


// 选择条件
const Option = Select.Option;

function handleYearChange(value) {
    console.log(`${value}`);
}

function handleSchoolChange(value) {
    console.log(`${value}`);
}

function handleClassChange(value) {
    console.log(`${value}`);
}

class GroupPortrait extends React.Component {

    state = {
        // 当前tap页
        current: 'gaikuang',
    }
    
    // 切换tap页
    handleNavClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render () {
        return (
            <div className="groupportrait">


                <Breadcrumb  className="breadcrumb">
                    <Breadcrumb.Item>综合画像</Breadcrumb.Item>
                    <Breadcrumb.Item>群体画像</Breadcrumb.Item>
                </Breadcrumb>



                <div className="filterform">
                    <span>选择条件：</span>
                    <Select defaultValue="2018年" style={{ width: 124, marginRight: 10 }} onChange={handleYearChange}>
                        <Option value="2018年">2018年</Option>
                        <Option value="2017年">2017年</Option>
                        <Option value="2016年">2016年</Option>
                    </Select>
                    <Select defaultValue="院校名称1" style={{ width: 178, marginRight: 10 }} onChange={handleSchoolChange}>
                        <Option value="院校名称1">院校名称1</Option>
                        <Option value="院校名称2">院校名称2</Option>
                        <Option value="院校名称3">院校名称3</Option>
                    </Select>
                    <Select defaultValue="院系名称1" style={{ width: 124, marginRight: 10 }} onChange={handleClassChange}>
                        <Option value="院系名称1">院系名称1</Option>
                        <Option value="院系名称2">院系名称2</Option>
                        <Option value="院系名称3">院系名称3</Option>
                    </Select>
                    <Button type="primary" icon="search">搜  索 </Button>
                </div>


                <Menu onClick={this.handleNavClick} selectedKeys={[this.state.current]} mode="horizontal" style={{paddingLeft: 20}}>

                    <Menu.Item key="gaikuang" style={{paddingLeft:35, paddingRight:35}}>
                        <NavLink to="/mainframe/groupportrait/gaikuang">学院概况</NavLink>
                    </Menu.Item>

                    <Menu.Item key="zhengshu" style={{paddingLeft:35, paddingRight:35}}>
                        <NavLink to="/mainframe/groupportrait/zhengshu">等级证书</NavLink>
                    </Menu.Item>

                    <Menu.Item key="shijian" style={{paddingLeft:35, paddingRight:35}}>
                        <NavLink to="/mainframe/groupportrait/shijian">创新实践</NavLink>
                    </Menu.Item>

                    <Menu.Item key="jiangxuejin" style={{paddingLeft:35, paddingRight:35}}>
                        <NavLink to="/mainframe/groupportrait/jiangxuejin">奖学金</NavLink>
                    </Menu.Item>

                    <Menu.Item key="qingxiaojia" style={{paddingLeft:35, paddingRight:35}}>
                        <NavLink to="/mainframe/groupportrait/qingxiaojia">请销假</NavLink>
                    </Menu.Item>

                </Menu>

                <Switch>
                    <Route path="/mainframe/groupportrait/gaikuang" component={Gaikuang} />
                    <Route path="/mainframe/groupportrait/zhengshu" component={Zhengshu} />
                    <Route path="/mainframe/groupportrait/shijian" component={Shijian} />
                    <Route path="/mainframe/groupportrait/jiangxuejin" component={Jiangxuejin} />
                    <Route path="/mainframe/groupportrait/qingxiaojia" component={Qingxiaojia} />
                    <Route component={Gaikuang} />
                </Switch>

            </div>
        )
    }
}

export default withRouter(connect(state=>state)(GroupPortrait));

