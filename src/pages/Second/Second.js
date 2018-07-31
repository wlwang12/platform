import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class Second extends React.Component{
    render () {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
                    <div style={{width:"100%", height: "64px", background: "white"}}>top</div>
                </Header>
                <Layout>
                    <Sider style={{zIndex: 1, height: '100vh', position: 'fixed', left: 0,  marginTop: 64  }}>
                        <div style={{width:"100%",height:"100%", background: "white"}}>123</div>
                    </Sider>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <h4>THIS IS Second PAGE </h4>
                        <p>
                            <NavLink exact to="/">to home page</NavLink>
                        </p>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(connect(state => state)(Second))