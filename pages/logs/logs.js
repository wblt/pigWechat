//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: {}
  },
  //事件处理函数
  toast: function () {
    wx.navigateTo({
      url: '../ceshi/ceshi'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        
        console.log('dddd')
        
        return util.formatTime(new Date(log))
      })
    })
  }
})
