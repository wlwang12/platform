import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getAction} from '../../utills/axios'

class Second extends React.Component{
    componentDidMount() {
        getAction("https://malsup.github.io/min/jquery.form.min.js").then(function (response){
            console.log(response)
        })
    }
    render () {
        return (
            <div>
                <h4>THIS IS Second PAGE </h4>
                <p>
                    <NavLink exact to="/">to home page</NavLink>
                </p>
            </div>
        )
    }
}

export default withRouter(connect(state => state)(Second))