/**
 * @description 登录控制
 * @author 张航
 * @date 2019-04-28 09:13:37
 * @version V1.0.0
 */
const login = require('../services/login')

module.exports = {
  /**
   * @functionName login
   * @param {Object} ctx 登录参数
   * @return {Array} 返回结果
   * @description 登录
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async login(ctx) {
    let form = ctx.request.body
    let {
      userName,
      password
    } = form
    let data = await login.login(userName, password)
    ctx.body = data
  }
}