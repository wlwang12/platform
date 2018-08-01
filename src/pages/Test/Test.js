// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
// 引入页面组建
import Grade from '../../chartComponent/bar/grade/grade'

class Test extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Grade />
			</React.Fragment>
		)
	}
}

export default withRouter(connect(state=>state)(Test))
