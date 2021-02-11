// pages/image/image.js
Page({
  data: {
    imgPath:''
  },
  getImgPath(){
    //调用API，让用户相册选择还是拍照选择图片
    wx.chooseImage({
      success:res=>{
        console.log(res);
        this.setData({
          //取出图片
          imgPath:res.tempFilePaths[0]
        })
      }
    })
  },
  imgLoad(){
    console.log("图片加载完成后回调的函数");
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