/**
 * 提示与加载工具类
 * @method Tips
 */

export default class Tips {
  constructor() {
    this.isLoading = false
    this.timeout = 30000
    this.timer = ''
  }

  // 加载提示
  static loading(title = '加载中') {
    if (Tips.isLoading) {
      return
    }
    clearTimeout(this.timer)
    Tips.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
    this.timer = setTimeout(() => {
      Tips.isLoading = false
      wx.hideLoading()
      wx.showToast({
        title: '加载超时',
        icon: 'none'
      })
    }, this.timeout)
  }

  // 加载完毕
  static loaded() {
    if (Tips.isLoading) {
      clearTimeout(this.timer)
      Tips.isLoading = false
      wx.hideLoading()
    }
  }
}

// 静态变量，是否加载中
Tips.isLoading = false
Tips.timeout = 30000
Tips.timer = ''
