// react基础依赖
import React from 'react';
// 路由组建
import { withRouter } from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入antd
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import { DataSet } from '@antv/data-set';
//引入less文件


class AveragePerformanceTrend extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Card>
                    <p className="fw-bold s16" style={{color:"#19233c"}}>平均成绩趋势</p>
                </Card>
            </React.Fragment>
        )
    }
}


export default withRouter(connect(state=>state)(AveragePerformanceTrend))