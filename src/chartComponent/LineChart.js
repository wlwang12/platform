import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set'

class LineChart extends Component {
    constructor(props) {
        super(props);
    }
    onFirstLoad(ev){
        if(this.props.onFirstLoad){
            this.props.onFirstLoad(ev);
        }
    }
    onClickAction(ev){
        if(this.props.onClickAction){
            this.props.onClickAction(ev);
        }
    }
    render() {
        const data = this.props.data;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        let fields=[], nameKey;
        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0];
            Object.keys(data[0]).forEach((item,index)=>{
                if(index!==0){
                    fields.push(item);
                }
                
            })
        }
        dv.source(data).transform({
            type: 'fold',
            fields: fields,
            key: 'key',
            value: 'value'
        });
        return (
            <Chart height={this.props.height || 350} data={dv} padding={this.props.padding || [30, 20, 60, 50]} forceFit>
                <Legend marker={'circle'} />
                <Axis name='key' />
                <Axis name="value" />
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom 
                    type="line" 
                    position={nameKey+"*value"} 
                    color={['key',this.props.colors]} />
                <Geom 
                    type={this.props.geomType||'point'} 
                    position={nameKey+"*value"} 
                    shape={'circle'} 
                    color={['key',this.props.colors]} />
            </Chart>
        )
    }
}

export default LineChart;