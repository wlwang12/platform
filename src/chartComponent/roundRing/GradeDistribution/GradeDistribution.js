// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入antd
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
//引入less文件
import './GradeDistribution.less';

class GradeDistribution extends React.Component {
	render () {
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
            { item: '事例一', count: 40 },
            { item: '事例二', count: 21 },
            { item: '事例三', count: 17 },
            { item: '事例四', count: 13 },
            { item: '事例五', count: 9 }
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
				<Card>
					<p>成绩分布</p>
                    <Chart height={window.innerHeight} data={dv} scale={cols} padding={[ 80, 100, 80, 80 ]} forceFit>
                        <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
                        <Axis name="percent" />
                        <Legend position='right' offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
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
