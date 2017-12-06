import __config from './global/config';
import HttpService from './controller/controller';
import WxService from './assets/plugins/wx-service/WxService';

//app.js
App({
    /**
    *onLaunch(options)       : 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）,
    *onReady                 : 页面渲染完成
    *onShow(options)         : 页面显示
    *onLoad(options)         : 页面显示
    *onHide                  : 页面隐藏
    *onUnload                : 页面关闭
    *onError(msg)            : 页面出错
    */
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    globalData: {
        userInfo: null
    },
    HttpService: new HttpService({
        baseURL: __config.domain,
    }),
    WxService: new WxService
})