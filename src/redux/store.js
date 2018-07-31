import {createStore, combineReducers} from 'redux';
import LoginStatus from "./reducers/loginStatus";
import LoadingStatus from './reducers/loadingStatus';

const reducers = combineReducers({
    LoginStatus,
    LoadingStatus
})

const store = createStore(reducers)

export default store