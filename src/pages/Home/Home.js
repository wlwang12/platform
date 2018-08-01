import React from 'react';
import { connect } from 'react-redux';
import {NavLink, withRouter} from "react-router-dom";

class Home extends React.Component{
    render () {
        return (
            <div>
                <h4>THIS IS HOME PAGE </h4>
                <p>
                    <NavLink to="/mainframe">to MainFrame page</NavLink>
                </p>
            </div>
        )
    }
}

export default withRouter(connect(state => state)(Home))