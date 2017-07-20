//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
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
