/**
 * webSocket类
 * @method webSocket
 */

export default class webSocket {
  // es7（静态属性可以在方法内部）
  static socketMsgQueue = []
  static isLoading = false

  static _initSocket (self) {
    console.log(this.isLoading)
    console.log(self.globalData.webSocket)
    self.globalData.localSocket = wx.connectSocket({
      url: 'wss://mapp.enzhico.net/app'
    })
    this.showLoad()
    self.globalData.localSocket.onOpen(function (res) {
      console.log('WebSocket连接已打开！readyState=' + self.globalData.localSocket.readyState)
      this.hideLoad()
      while (this.socketMsgQueue.length > 0) {
        var msg = this.socketMsgQueue.shift()
        this.sendSocketMessage(self, msg)
      }
    })
    self.globalData.localSocket.onMessage(function(res) {
      this.hideLoad()
      self.globalData.callback(res)
    })
    self.globalData.localSocket.onError(function(res) {
      console.log('readyState=' + self.globalData.localSocket.readyState)
    })
    self.globalData.localSocket.onClose(function (res) {
      console.log('WebSocket连接已关闭！readyState=' + self.globalData.localSocket.readyState)
      this._initSocket()
    })
  }

  // 统一发送消息
  static sendSocketMessage (self, msg) {
    if (self.globalData.localSocket.readyState === 1) {
      this.showLoad()
      self.globalData.localSocket.send({
        data: JSON.stringify(msg)
      })
    } else {
      this.socketMsgQueue.push(msg)
    }
  }

  static showLoad() {
    if (!this.isLoading) {
      wx.showLoading({
        title: '请稍后...'
      })
      this.isLoading = true
    }
  }

  static hideLoad() {
    wx.hideLoading()
    this.isLoading = false
  }
}
