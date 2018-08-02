import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set'

class BarChart extends Component {
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
        } else {
            return (<div></div>);
        }
        dv.source(data).transform({
            type: 'fold',
            fields: fields,
            key: 'key',
            value: 'value'
        });
        return (
            <Chart height={this.props.height || 350} data={dv} padding={this.props.padding} forceFit
                onGetG2Instance={(ev)=>this.onFirstLoad(ev)}
                onPlotClick={(ev)=>this.onClickAction(ev)}
                >
                {this.props.transpose?<Coord transpose />:null}
                <Axis name="key" />
                <Axis name="value" />
                <Legend marker={'circle'}/>
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom 
                    type={this.props.geomType || 'interval'} 
                    position="key*value" 
                    color={[nameKey,this.props.colors]} 
                    adjust={[{type: 'dodge',marginRatio: 1/32}]} />
            </Chart>
        )
    }
}

export default BarChart;