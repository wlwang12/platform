import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TopComponent from '../../components/topcomponent/topcomponent'
import LeftComponent from './../../components/leftcomponent/leftcomponent';
import RightComponent from './../../components/rightcomponent/rightcomponent';

class MainFrame extends React.Component{
    render () {
        return (
            <React.Fragment>
                <TopComponent />
                <LeftComponent />
                <RightComponent />
            </React.Fragment>
        )
    }
}

export default withRouter(connect(state => state)(MainFrame))