// pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  toWeixinPay: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://yg.welcare-tech.com.cn:8443/platform/codeToOpenid.htm',
            method: 'GET',
            data: {
              code: res.code
            },
            success: function (res) {
              var openid = res.data;
              if (openid) {
                //发起网络请求
                wx.request({
                  url: 'https://yg.welcare-tech.com.cn:8443/platform/wechatpay.htm',
                  method: 'GET',
                  data: {
                    openid: openid,
                    total_fee: 10
                  },
                  success: function (res) {
                    wx.requestPayment({
                      'timeStamp': res.data.timeStamp,
                      'nonceStr': res.data.nonceStr,
                      'package': res.data.package,
                      'signType': 'MD5',
                      'paySign': res.data.paySign,
                      'success': function (res) {
                         alert("支付成功!")
                      },
                      'fail': function (res) {
                      }
                    })

                  },
                  fail: function (err) {
                    console.log(err)
                  }
                })
              }
            },
            fail: function (err) {
              console.log(err)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})