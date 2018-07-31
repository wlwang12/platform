
const init = {
    loginStatus: false
}

const LoginStatus = (state = init, action) => {
    switch (action.type) {
        case 'loginStatus':
            return {
                loginStatus: !state.loginStatus
            }
        default: 
            return state
    }
}

export default LoginStatus