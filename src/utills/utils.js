const commonMethods = {
    // 转大写
    toUppercaseMethod: (str) => str.toUpperCase(),
    // 转小写 
    toLowercaseMethod: (str) => str.toLowerCase(),
    // 设置本地临时存储
    setSession: (key, value) => sessionStorage.setItem(key, value),
    // 读取本地临时存储
    getSession: (key) => sessionStorage.getItem(key),
    // 删除本地临时存储
    removeSession: (key) => sessionStorage.removeItem(key),
    // clear清除所有的key/value
    clearSession: () => sessionStorage.clear(),
    // 去除字符串中所有的空格， 返回值：没有空格的字符串
    Trim: (str, is_global) => {
        let result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if(is_global.toLowerCase() === "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    },
    // notNull
    notNull: (obj) => obj !== undefined && obj !== null && obj !== '',
    
    //JS操作cookies方法!
    //写cookies
    setCookie: (name, value) => {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },

    // 读取cookies
    getCookie: (name) => {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if(arr === document.cookie.match(reg))
            return unescape(arr[2]);
        else {
            return null;
        }
    },

    // 删除cookies
    delCookie: (name) => {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie(name);
        if(cval !== null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + "; path=/";
    },

    // 判断是否为手机号  
    isPoneAvailable: (phone) => {
        let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(phone)) {
            return false;
        } else {
            return true;
        }
    },

    // 判断是否为电话号码  
    isTelAvailable: (tel) => {
        let myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        if(!myreg.test(tel)) {
            return false;
        } else {
            return true;
        }
    },

    // 判断是否为邮箱地址
    isEmailAvailable: (email) => {
        let myreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!myreg.test(email)) {
            return false;
        } else {
            return true;
        }
    },

    // 判断是否为数字
    isNum: (num) => {
        let myreg =  new RegExp("^[0-9]*$");
        if (!myreg.test(num)) {
            return false;
        } else {
            return true;
        }
    }
};

export default commonMethods;
