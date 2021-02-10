// App({}) 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
App({
  onLaunch (options) {
    console.log("小程序初始化完成时执行");
    console.log(options);
  },
  onShow (options) {
    console.log("小程序显示出来时执行");
    wx.getUserInfo({
      success:(res)=>{
        console.log(res);
      }
    })
  },
  onHide () {
    console.log("小程序隐藏起来时执行");
  },
  onError (msg) {
    console.log("小程序出现错误时执行，msg错误信息")
    console.log(msg)
  },
  //全局数据
  globalData: 'I am global data'
})