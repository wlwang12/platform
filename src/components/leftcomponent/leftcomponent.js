// 引入基础react
import React from 'react';
// 引入路由组建
import {NavLink, withRouter} from "react-router-dom";
// 引入状态管理组建
import {connect} from "react-redux";
// 引入antd组建
import { Menu } from 'antd';
// 引入美化滚动条组建
import { Scrollbars } from 'react-custom-scrollbars';
// 引入当前组建css
import './leftcomponent.css'

const SubMenu = Menu.SubMenu;

class LeftComponent extends React.Component{
    render () {
        return (
            <div className='leftcomponent'>
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    style={{ width: "100%", height: "100%" }}>

                    <Menu defaultSelectedKeys={['5']} defaultOpenKeys={['menu1']} mode="inline" theme="dark">
                        
                        <SubMenu key="menu1" title={<span><i className="iconfont icon-shujumofang mr5"></i><span>综合画像</span></span>}>
                            <Menu.Item key="5">
                                <NavLink to="/mainframe/groupportrait">群体画像</NavLink>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <NavLink to="/mainframe/personalportrait">个人画像</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="menu2" title={<span><i className="iconfont icon-guiji mr5"></i><span>行为轨迹</span></span>}>
                            <Menu.Item key="7">个人轨迹</Menu.Item>
                            <Menu.Item key="8">群体轨迹</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="menu3">
                            <i className="iconfont icon-yujing mr5"></i>
                            <span>综合预警</span>
                        </Menu.Item>
                        <SubMenu key="menu4" title={<span><i className="iconfont icon-icon-- mr5"></i><span>系统设置</span></span>}>
                            <Menu.Item key="9">预警设置</Menu.Item>
                            <Menu.Item key="10">行为轨迹设置</Menu.Item>
                        </SubMenu>
                        <SubMenu key="menu5" title={<span><i className="iconfont icon-quanxianguanli mr5"></i><span>权限管理</span></span>}>
                        </SubMenu>
                    </Menu>

                </Scrollbars>
            </div>
        )
    }
}

export default withRouter(connect(state => state)(LeftComponent))