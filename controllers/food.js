/**
 * @description 菜品控制
 * @author 张航
 * @date 2019-04-28 09:13:37
 * @version V1.0.0
 */
const food = require('../services/food')

module.exports = {
  /**
   * @functionName creatFood
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 新增菜品
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async creatFood(ctx) {
    let form = ctx.request.body
    let {
      name,
      remark
    } = form
    let data = await food.creatFood({
      name,
      remark
    })
    ctx.body = data
  },
  /**
   * @functionName getFoodList
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询菜品列表
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getFoodList(ctx) {
    let form = ctx.request.body
    let data = await food.getFoodList(form)
    ctx.body = data
  },
  /**
   * @functionName getWorkPage
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询菜品分页
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getFoodPage(ctx) {
    let form = ctx.request.body
    let {
      pageSize,
      current
    } = form
    let data = await food.getFoodPage(pageSize, current)
    ctx.body = data
  },
  /**
   * @functionName getFood
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询菜品
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getFood(ctx) {
    let id = ctx.request.body.id
    let data = await food.getFood(id)
    if (data.length < 2) {
      data = data[0]
    }
    ctx.body = data
  },
  /**
   * @functionName modifyFood
   * @param {Object} ctx 修改数据
   * @return {Object} 返回结果
   * @description 修改菜品
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async modifyFood(ctx) {
    let form = ctx.request.body
    let {
      id,
      name,
      remark
    } = form
    let data = await food.modifyFood({
      name,
      remark
    }, id)
    ctx.body = data
  },
  /**
   * @functionName deleteFood
   * @param {Object} ctx 删除id
   * @return {Object} 返回结果
   * @description 删除菜品
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async deleteFood(ctx) {
    let id = ctx.request.body.id
    let data = await food.deleteFood(id)
    ctx.body = data
  }
}