import React from 'react';
import Protal from "../protal";
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './loading.css';

class Loading extends React.Component {
    render () {
        
        let togglestyle = {
            display: "none"
        }

        if (this.props.LoadingStatus.loadingStatus) {
            togglestyle = {
                display: "flex"
            }
        }

        return (
            <Protal>
                <div className="shield" style={togglestyle}>
                    <Spin />
                </div>
            </Protal>
        )
    }
};

export default withRouter(connect(state=>state)(Loading))

