//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    num:'',
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  listenerLogin: function() {
    
    if(this.data.num.length == 0){
      
      wx.showModal({
        title: '温馨提示',
        content: '请填写卡号',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }else {
      // wx.navigateTo({

      //   url: '../ceshi/ceshi'
      // })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })

      var that = this
      wx.request({
        url: 'https://yg.welcare-tech.com.cn:8443/hiwatchclient/getauthcheck.htm',
        method: 'get',
        data:{
          'phone': this.data.num
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        success:function(res) {
          console.log(res.data)
          var textType = res.data;
            if(res.data == 1) {
              textType = "审核中";
            } else if (res.data == 2) {
              textType = "审核失败";
            } else if (res.data == 3) {
              textType = "国政通审核失败";
            } else if (res.data == 0) {
              textType = "审核通过";
            }else {
              textType = "未知状态";
            }
            wx.request({
              url: 'https://yg.welcare-tech.com.cn:8443/hiwatchclient/simstatus.htm',
              method: 'GET',
              data: {
                'phone': that.data.num
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function (res1) {
                console.log(res1.data)
                var numType = res1.data;
                if (res1.data == 1) {
                  numType = "激活不在线";
                } else if (res1.data == 2) {
                  numType = "未激活";
                } else if (res1.data == 3) {
                  numType = "已停用";
                } else if (res1.data == 4) {
                  numType = "库存";
                } else if (res1.data == 0) {
                  numType = "激活且在线";
                } else {
                  numType = "未知状态";
                }
                wx.request({
                  url: 'https://yg.welcare-tech.com.cn:8443/hiwatchclient/getsimcardbill.htm',
                  method: 'get',
                  data: {
                    'phone': that.data.num
                  },
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (res2) {
                    console.log(res2.data)
                    wx.hideToast()
                    wx.navigateTo({

                      url: '../ceshi/ceshi?type=' + textType + '&numType=' + numType + '&money=' + res2.data.number
                    })
                  },
                  fail: function () {
                    wx.showToast({
                      title: '请求失败',
                      icon: 'success',
                      duration: 1000,
                      mask: true
                    })

                  }
                })
              },
              fail: function () {
                wx.showToast({
                  title: '请求失败',
                  icon: 'success',
                  duration: 1000,
                  mask: true
                })

              }
            })
          
        },
        fail: function () {
          wx.showToast({
            title: '请求失败',
            icon: 'success',
            duration: 1000,
            mask: true
          })
        }
      })
    }
  },

  listenerPhoneInput: function (e) {
    this.setData({
      num: e.detail.value
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
