//react基础依赖
import React from 'react';
//路由组件
import { withRouter } from 'react-router-dom';
//状态管理组件
import { connect } from 'react-redux';
//引入antd
import { Card, } from 'antd';
import { Chart, Axis, Geom, Tooltip, Coord, Legend  } from 'bizcharts';
import { DataSet } from '@antv/data-set';
//引入less
import './NumberDistribution.less'


class NumberDistribution extends React.Component{
    render(){
        const data = [
            { 'State': '动力工程学院', '男生': 340, '女生': 110 },
            { 'State': '电气工程学院', '男生': 240, '女生': 120 },
            { 'State': '信息安全学院', '男生': 310, '女生': 40 },
            { 'State': '核科学技术学院', '男生': 220, '女生': 50 },
            { 'State': '电子工程学院', '男生': 235, '女生': 30 }
        ];

        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: 'fold',
            fields: [ '男生', '女生' ], // 展开字段集
            key: '学院', // key字段
            value: '学员数量', // value字段
            retains: [ 'State' ] // 保留字段集，默认为除fields以外的所有字段
        });
        const titleSet = {
            offset: {Number}, // 设置标题 title 距离坐标轴线的距离
            textStyle: {
                fontSize: '10',
                textAlign: 'center',
                fill: '#999',
            }
        };
        return(
            <React.Fragment>
                <Card className="number-distribution">
                    <p className="fw-bold s16" style={{color:"#19233c"}}>人数分布(院/系)</p>
                    <p>（单位：人）</p>
                    <Chart
                        height={350}
                        data={dv}
                        forceFit>
                        <Legend />
                        <Coord transpose />
                        <Axis name="State" title={titleSet} label={{offset: 8}}/>
                        <Axis name="学员数量" />
                        <Tooltip />
                        <Geom type="intervalStack" position="State*学员数量" color={['学院',['#1890ff','#f0785f']]} />
                    </Chart>
                </Card>
            </React.Fragment>
        )
    }
}


export default withRouter(connect(state=>state)(NumberDistribution))