//index.js
//获取应用实例
const app = getApp()
import { $wuxActionSheet } from '../../components/wux'

Page({
    data: {

    },
    /**
     * @param {Object} options URL的参数query
     */
    onLoad: function (options) {
        app.HttpService.carBrandList({}).then( res => {
            console.log(res.data)
        });
        wx.login({
            success: function(res){
                console.log(res)
            }
        })
    },
    showActionSheet1() {
        wx.showActionSheet({
            itemList: ['实例菜单', '实例菜单']
        })
    },
    showActionSheet2() {
        $wuxActionSheet.show({
            titleText: '自定义操作',
            buttons: [
                {
                    text: 'Go Dialog'
                },
                {
                    text: 'Go Toast'
                },
            ],
            buttonClicked(index, item) {
                index === 0 && wx.navigateTo({
                    url: '/pages/dialog/index'
                })

                index === 1 && wx.navigateTo({
                    url: '/pages/toast/index'
                })

                return true
            },
            cancelText: '取消',
            cancel() {},
            destructiveText: '删除',
            destructiveButtonClicked() {},
        })
    },
    showActionSheet3() {
        if (this.timeout) clearTimeout(this.timeout)

        const hideSheet = $wuxActionSheet.show({
            theme: 'wx',
            titleText: '三秒后自动关闭',
            buttons: [
                {
                    text: '实例菜单'
                },
                {
                    text: '实例菜单'
                },
            ],
            buttonClicked(index, item) {
                return true
            },
        })

        this.timeout = setTimeout(hideSheet, 3000)
    },
})
