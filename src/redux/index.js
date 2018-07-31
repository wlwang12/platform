import {createStore, combineReducers} from 'redux';
import LoginStatus from "./reducer/loginStatus";
import LoadingStatus from './reducer/loadingStatus';

const reducers = combineReducers({
    LoginStatus,
    LoadingStatus
})

const store = createStore(reducers)

export default store