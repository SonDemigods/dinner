/**
 * @description 菜品服务
 * @author 张航
 * @date 2019-04-10 09:26:24
 * @version V1.0.0
 */
const foodModel = require('../models/food')

const food = {
  /**
   * @functionName creatFood
   * @param {Object} data 菜品信息
   * @return {Object|null} 返回结果
   * @description 新增菜品
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async creatFood(data) {
    let resultData = await foodModel.creatFood(data)
    return resultData
  },
  /**
   * @functionName getFoodList
   * @param {Object} data 查找条件
   * @return {Object|null} 返回结果
   * @description 查找菜品列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getFoodList(data) {
    let resultData = await foodModel.getFoodList(data)
    return resultData
  },
  /**
   * @functionName getFoodPage
   * @param {Number} pageSize 分页条数
   * @param {Number} current 分页
   * @return {Object|null} 返回结果
   * @description 查找菜品分页
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getFoodPage(pageSize, current) {
    let resultData = await foodModel.getFoodPage(pageSize, current)
    return resultData
  },
  /**
   * @functionName getFood
   * @param {Number} id 菜品id
   * @return {Object|null} 返回结果
   * @description 查找菜品
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getFood(id) {
    let resultData = await foodModel.getFood(id)
    return resultData
  },
  /**
   * @functionName modifyFood
   * @param {Object} data 菜品信息
   * @param {Number} id 菜品id
   * @return {Object|null} 返回结果
   * @description 修改菜品
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async modifyFood(data, id) {
    let resultData = await foodModel.modifyFood(data, id)
    return resultData
  },
  /**
   * @functionName deleteFood
   * @param {Object} id 查找条件
   * @return {Object|null} 返回结果
   * @description 删除菜品
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async deleteFood(id) {
    let resultData = await foodModel.deleteFood(id)
    return resultData
  },
}

module.exports = food