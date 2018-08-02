// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入antd
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import { DataSet } from '@antv/data-set';
//引入less文件
import './GradeDistribution.less';

class GradeDistribution extends React.Component {

	render () {
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
            { item: '优', count: 10 },
            { item: '良', count: 49 },
            { item: '中', count: 11 },
            { item: '差', count: 17 },
            { item: '不及格', count: 13 },

        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = (val * 100) + '%';
                    return val;
                }
            }
        }

        return (
			<React.Fragment>
				<Card className="distribution">
					<p className="fw-bold s16" style={{color:"#19233c"}}>成绩分布</p>
                    <p>(单位：人)</p>
                    <Chart
                        height={this.props.height || 300}
                        data={dv}
                        scale={cols}
                        padding={this.props.padding}
                        forceFit>
                        <Coord
                            type={'theta'}
                            radius={this.props.radius || 0.75}
                            innerRadius={0.6}
                        />
                        <Axis name="percent" />
                        <Legend
                            position='right'
                            offsetY={-window.innerHeight / 2 + 330}
                            offsetX={-120}
                        />
                        <Tooltip
                            showTitle={false}
                            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color='item'
                            tooltip={['item*percent',(item, percent) => {
                                percent = percent * 100 + '%';
                                return {
                                    name: item,
                                    value: percent
                                };
                            }]}
                            style={{lineWidth: 1,stroke: '#fff'}}
                        >
                            <Label content='percent' formatter={(val, item) => {
                                return item.point.item + ': ' + val;}} />
                        </Geom>
                    </Chart>
				</Card>
			</React.Fragment>
		)
	}
}

export default withRouter(connect(state=>state)(GradeDistribution))
