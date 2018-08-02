// react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入antd
import { Card,Row, Col, Badge } from 'antd';
//引入图片
import girlPng from './girl.png';
import boyPng from './boy.png';
//引入半圆环组件
import Progress from './Progress';
//引入less文件
import "./BoyGirlProportion.less"

class BoyGirlProportion extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Card className={"proportion " + this.props.className} style={this.props.style}>
                    <p className="fw-bold s16" style={{color:"#19233c"}}>男女比例</p>
                    <p>(单位：人)</p>
                    <div className="mt25">
                        <Progress width={440}
                                  processWidth={25}
                                  silderWidth={100}
                                  color={'#f0785f'}
                                  bgColor= {'#1890ff'}
                                  process={25}
                                  title={<span style={{fontSize:35,color:'#9b9b9b'}}>10000</span>}
                                  desc={<span style={{fontSize:12,color:'#9b9b9b'}}>人</span>}
                                  left={<img src={girlPng} style={{marginRight:30}} alt="girl"/>}
                                  right={<img src={boyPng} style={{marginLeft:30}} alt="boy"/>}
                        />
                    </div>
                    <Row className="stCountFooter">
                        <Col span={6} className="girl-precent">
                            <Badge dot style={{backgroundColor:'#f0785f'}} /> 25%
                        </Col>
                        <Col span={6} className="desc">
                            女生：2500人
                        </Col>
                        <Col span={6} className="boy-precent leftBorder">
                            <Badge dot style={{backgroundColor:'#1890ff' +
                                ''}} /> 75%
                        </Col>
                        <Col span={6} className="desc">
                            男生：7500人
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        )
    }
}


export default withRouter(connect(state=>state)(BoyGirlProportion))