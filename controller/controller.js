import WxRequest from '../assets/plugins/wx-request/lib/index';
import apiPath from './api';
/**
 *引用wx-extend；wx-request包含常用方法如下：
 *getRequest(url, config)
 *postRequest(url, config)
 *putRequest(url, config)
 *deleteRequest(url, config)
 *headRequest(url, config)等
*/
class HttpService extends WxRequest {
	constructor(options) {
		super(options)
		this.$$prefix = '';
		this.$$path = apiPath;
		/**
		*注入拦截器
		*interceptors.use(obj) 添加一个拦截器，返回 id
		*interceptors.eject(id) 移除一个拦截器
		*/
        this.interceptors.use({
            request(request) {
            	request.header = request.header || {}
            	request.header['content-type'] = 'application/json'
                // if (request.url.indexOf('/api') !== -1 && wx.getStorageSync('token')) {
                //     request.header.Authorization = 'Bearer ' + wx.getStorageSync('token')
                // }
                wx.showLoading({
                    title: '加载中',
                })
                return request
            },
            requestError(requestError) {
            	wx.hideLoading()
                return Promise.reject(requestError)
            },
            response(response) {
            	wx.hideLoading()
            	// if(response.statusCode === 401) {
             //        wx.removeStorageSync('token')
             //        wx.redirectTo({
             //            url: '/pages/login/index'
             //        })
             //    }
                return response
            },
            responseError(responseError) {
            	wx.hideLoading()
                return Promise.reject(responseError)
            },
        })
	}

	carBrandList(params) {
		return this.postRequest(this.$$path.carBrandList, {
			data: params
		});
	}
}

export default HttpService