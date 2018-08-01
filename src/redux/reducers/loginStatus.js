
const init = {
    loginStatus: true
}

const LoginStatus = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN-STATUS':
            return {
                loginStatus: !state.loginStatus
            }
        default: 
            return state
    }
}

export default LoginStatus

