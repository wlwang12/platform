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
					{/*成绩分布*/}
					<Col span={12}>
						<BoyGirlProportion />
                    </Col>
                    {/*平均成绩趋势*/}
                    <Col span={12}>
						<DegreeDistribution />
                    </Col>
                </Row>
				
			</React.Fragment>
		)
	}
}

export default withRouter(connect(state=>state)(Test))
