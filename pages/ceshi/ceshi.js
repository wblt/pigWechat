// others.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '审核通过',
    numType: '已激活(在线)',
    money: '-10.00',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // this.setData({
    //   type: options.type,
    //   numType: options.num
    // });
    // wx.request({
    //   url: 'http://hi-watch.com.cn/hiwatchclient/simstatus.htm',
    //   data: {
    //     'phone': options.num
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     console.log(res.data)

    //   },
    //   fail: function () {

    //   }
    // })
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