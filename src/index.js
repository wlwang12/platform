// react基础依赖
import React from 'react';
import ReactDOM from 'react-dom';
// 状态管理依赖
import { Provider } from "react-redux"
import store from './redux/store';
// 路由依赖
import {HashRouter as Router} from 'react-router-dom';
// 路由配置文件
import RouterPage from "./router/router"
// 全局自定义样式文件
import './utills/self.css';


// 根节点渲染和挂载
ReactDOM.render(
	<Provider store = {store}>
		<Router>
			<RouterPage />
		</Router>
    </Provider>,
	document.getElementById('root')
);

