import axios from 'axios';
import Qs from "qs";
import store from './../redux/store';
import {loadingStatusAction} from '../redux/actions/loadingStatusAction'

//基本设置
let options = {
    timeout: 10000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }
}

options.baseURL = "";
const ajax = axios.create(options);

let reqNumer = 0; //请求数量

ajax.interceptors.request.use(function (config) {  //在请求发出之前进行一些操作
    reqNumer++;
    store.dispatch(loadingStatusAction(true));
    return config;
})

ajax.interceptors.response.use(function (response) {  // 接受请求后reqNumer--，判断请求所有请求是否完成
    reqNumer--;
    if (reqNumer <= 0) {
        store.dispatch(loadingStatusAction(false));
    } else {
         store.dispatch(loadingStatusAction(true));
    }
    //统一处理返回数据
    const useResponse = response.data;
    if (useResponse.success) {
        return { "success": true, "obj": useResponse["obj"] };
    } else {
        if (useResponse.errorCode === 403) {
            // step1：退出登录(后台);
            // step2：前端(重写本地存储);
            // step3：页面(重定向至登录注册页面)
        } else {
            return { "success": false, "obj": useResponse["msg"] };
        }
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

const getAction = function (url, data) {
    return ajax.get(url, {
        params: data
    });
}

const postAction = function (url, data) {
    return ajax.post(url, Qs.stringify(data));
}

export {
    getAction,
    postAction
}