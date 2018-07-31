
const init = {
    loadingStatus: false
}

const LoadingStatus = (state = init, action) => {
    switch (action.type) {
        case 'LOADING-STATUS':
            return {
                loadingStatus: action.bool
            }
        default: 
            return state
    }
}

export default LoadingStatus