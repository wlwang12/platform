// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';

class Grade extends React.Component {
	render () {
		return (
			<React.Fragment>
				THIS IS GRDE
			</React.Fragment>
		)
	}
}

export default withRouter(connect(state=>state)(Grade))