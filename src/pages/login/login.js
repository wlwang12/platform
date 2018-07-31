import React from 'react';
import { connect} from 'react-redux';
import store from './../../redux/index';

class LoginPage extends React.Component{

    toggleLogin () {
        store.dispatch({
            type:'loginStatus'
        })
    }

    render () {
        return (
            <div>
                <h4>YOU HAVE NOT LOGIN YET, PLS LOGIN AT FIRST</h4>
                <button type="button" onClick={this.toggleLogin.bind(this)}>Login</button>
            </div>
        )
    }
}

export default connect(state => state)(LoginPage)