// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入antd
import { Row, Col } from 'antd';
// 引入页面组建
import GradeDistribution from './../../chartComponent/roundChart/GradeDistribution/GradeDistribution';

class Test extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Row>
					<Col span={12}>
						<GradeDistribution />
                    </Col>
					<Col span={12}></Col>
                </Row>
			</React.Fragment>
		)
	}
}

export default withRouter(connect(state=>state)(Test))
