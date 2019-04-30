/**
 * @description 菜品数据
 * @author 张航
 * @date 2019-04-28 09:14:04
 * @version V1.0.0
 */
const dbUtils = require('../utils/db')
const catchData = require('../utils/catchData')
const tableName = 'food'

const food = {
  /**
   * @functionName creatFood  
   * @param {Object} data 菜品数据
   * @return {Boolean} 返回结果
   * @description 新增菜品
   * @author 张航
   * @date 2019-04-26 14:01:56
   * @version V1.0.0
   */
  async creatFood(data) {
    let result = await dbUtils.insertData(tableName, data)
    let returnData = await catchData.catchData(result)
    return returnData
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
    let result = await dbUtils.select(tableName, '*')
    let returnData = await catchData.catchData(result)
    return returnData
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
    let start = pageSize * (current - 1)
    let end = pageSize * current
    let result = await dbUtils.findDataByPage(tableName, '*', start, end)
    let count = await dbUtils.count(tableName)
    let returnData = await catchData.catchPage(result, current, count)
    return returnData
  },
  /**
   * @functionName getFood
   * @param {Object} id 菜品id
   * @return {Object|null} 返回结果
   * @description 查找菜品
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getFood(id) {
    let result = await dbUtils.findDataById(tableName, id)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName modifyFood
   * @param {Object} data 菜品数据
   * @param {Number} id 菜品id
   * @return {Boolean} 返回结果
   * @description 修改菜品
   * @author 张航
   * @date 2019-04-26 14:04:36
   * @version V1.0.0
   */
  async modifyFood(data, id) {
    let result = await dbUtils.updateData(tableName, data, id)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName  deleteFood
   * @param {Object} id 菜品id
   * @return {Boolean} 返回结果
   * @description 删除菜品
   * @author 张航
   * @date 2019-04-26 14:07:05
   * @version V1.0.0
   */
  async deleteFood(id) {
    let result = await dbUtils.deleteDataById(tableName, id)
    let returnData = await catchData.catchData(result)
    return returnData
  }
}

module.exports = food