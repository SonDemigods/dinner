/**
 * @description 人员控制
 * @author 张航
 * @date 2019-04-28 09:13:37
 * @version V1.0.0
 */
const person = require('../services/person')

module.exports = {
  /**
   * @functionName creatPerson
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 新增人员
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async creatPerson(ctx) {
    let form = ctx.request.body
    let {
      name,
      password = '123456',
      work,
      isAdmin = 0
    } = form
    let data = await person.creatPerson({
      name,
      password,
      work,
      isAdmin
    })
    ctx.body = data
  },
  /**
   * @functionName getPersonList
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询人员列表
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getPersonList(ctx) {
    let form = ctx.request.body
    let data = await person.getPersonList(form)
    ctx.body = data
  },
  /**
   * @functionName getPersonPage
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询人员分页
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getPersonPage(ctx) {
    let form = ctx.request.body
    let {
      pageSize = 10,
        current = 1
    } = form
    let data = await person.getPersonPage(pageSize, current)
    ctx.body = data
  },
  /**
   * @functionName getPerson
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询人员
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getPerson(ctx) {
    let id = ctx.request.body.id
    let data = await person.getPerson(id)
    if (data.length < 2) {
      data = data[0]
    }
    ctx.body = data
  },
  /**
   * @functionName getPersonName
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询人员
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getPersonName(ctx) {
    let name = ctx.request.body.name
    let data = await person.getPersonName(name)
    if (data.length < 2) {
      data = data[0]
    } else {
      data = data
    }
    ctx.body = data
  },
  /**
   * @functionName modifyPerson
   * @param {Object} ctx 修改数据
   * @return {Object} 返回结果
   * @description 修改人员
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async modifyPerson(ctx) {
    let form = ctx.request.body
    let {
      id,
      name,
      password = '123456',
      work,
      isAdmin = 0
    } = form
    let data = await person.modifyPerson({
      name,
      password,
      work,
      isAdmin
    }, id)
    ctx.body = data
  },
  /**
   * @functionName deletePerson
   * @param {Object} ctx 删除id
   * @return {Object} 返回结果
   * @description 删除人员
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async deletePerson(ctx) {
    let id = ctx.request.body.id
    let data = await person.deletePerson(id)
    ctx.body = data
  }
}