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
      wx.navigateTo({
        url: '../logs/logs'
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

// var rootDocment = 'hxxxxx';//你的域名  
// function req(url, data, cb) {
//   wx.request({
//     url: rootDocment + url,
//     data: data,
//     method: 'post',
//     header: { 'Content-Type': 'application/json' },
//     success: function (res) {
//       return typeof cb == "function" && cb(res.data)
//     },
//     fail: function () {
//       return typeof cb == "function" && cb(false)
//     }
//   })
// }


// module.exports = {
//   req: req
// }  
