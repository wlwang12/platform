//react基础依赖
import React from 'react';
//路由组件
import { withRouter } from 'react-router-dom';
//状态管理组件
import { connect } from 'react-redux';
//引入antd
import { Card, } from 'antd';
import { Chart, Axis, Geom, Tooltip, Coord, Legend, Label } from 'bizcharts';
import { DataSet } from '@antv/data-set';
//引入less
import './DegreeDistribution.less'


class DegreeDistribution extends React.Component{
    render(){
        const { DataView } = DataSet;
        const data = [
            { item: '本科', count: 40 },
            { item: '研究生', count: 33 },
            { item: '博士', count: 15 },
            { item: '专科', count: 12 }
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

        return(
            <React.Fragment>
                <Card className="degree-distribution">
                    <p className="fw-bold s16" style={{color:"#19233c"}}>学位分布</p>
                    <p>(单位：人)</p>
                    <Chart
                        height={this.props.height || 200}
                        data={dv}
                        scale={cols}
                        padding={this.props.padding}
                        forceFit>
                        <Coord type='theta' radius={0.75} />
                        <Axis name="percent" />
                        <Legend
                            position='right'
                            offsetY={-window.innerHeight / 2 + 350}
                            offsetX={-100} />
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

export default withRouter(connect(state=>state)(DegreeDistribution))