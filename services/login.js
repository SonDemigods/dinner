/**
 * @description 登录服务
 * @author 张航
 * @date 2019-04-10 09:26:24
 * @version V1.0.0
 */
const personModel = require('../models/person')

const login = {
  /**
   * @functionName creatFood
   * @param {String} userName 登录信息
   * @param {String} password 登录信息
   * @return {Object|null} 返回结果
   * @description 登录
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async login(userName, password) {
    let user = await personModel.getPersonName(userName)
    let resultData
    if (user.length < 1) {
      resultData = {
        msg: '用户不存在',
        success: false
      }
    } else {
      resultData = {
        msg: '密码不正确',
        success: false
      }
      for (const iterator of user) {
        console.log(iterator.password === password)
        if (iterator.password === password) {
          resultData = {
            data: iterator,
            msg: '登录成功',
            success: true
          }
        }
      }
    }

    return resultData
  }
}

module.exports = login