/**
 * @description 人员数据
 * @author 张航
 * @date 2019-04-28 09:14:04
 * @version V1.0.0
 */
const dbUtils = require('../utils/db')
const catchData = require('../utils/catchData')
const tableName = 'person'

const person = {
  /**
   * @functionName creatPerson  
   * @param {Object} data 人员数据
   * @return {Boolean} 返回结果
   * @description 新增人员
   * @author 张航
   * @date 2019-04-26 14:01:56
   * @version V1.0.0
   */
  async creatPerson(data) {
    let result = await dbUtils.insertData(tableName, data)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName getPersonList
   * @param {Object} data 查找条件
   * @return {Object|null} 返回结果
   * @description 查找用户列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPersonList(data) {
    let result = await dbUtils.select(tableName, '*')
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName getPersonPage
   * @param {Number} pageSize 分页条数
   * @param {Number} current 分页
   * @return {Object|null} 返回结果
   * @description 查找用户分页
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPersonPage(pageSize, current) {
    let start = pageSize * (current - 1)
    let end = pageSize * current
    let result = await dbUtils.findDataByPage(tableName, '*', start, end)
    let count = await dbUtils.count(tableName)
    let returnData = await catchData.catchPage(result, current, count)
    return returnData
  },
  /**
   * @functionName getPerson
   * @param {Object} id 人员id
   * @return {Object|null} 返回结果
   * @description 查找人员
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPerson(id) {
    let result = await dbUtils.findDataById(tableName, id)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName getPersonName
   * @param {String} name 人员姓名
   * @return {Object|null} 返回结果
   * @description 查找人员姓名
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPersonName(name) {
    let _sql = "SELECT * FROM ?? WHERE name = ? "
    let result = await dbUtils.query(_sql, [tableName, name])
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName modifyPerson
   * @param {Object} data 人员数据
   * @param {number} id 人员id
   * @return {Boolean} 返回结果
   * @description 修改人员
   * @author 张航
   * @date 2019-04-26 14:04:36
   * @version V1.0.0
   */
  async modifyPerson(data, id) {
    let result = await dbUtils.updateData(tableName, data, id)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName  deletePerson
   * @param {Object} id 人员id
   * @return {Boolean} 返回结果
   * @description 删除人员
   * @author 张航
   * @date 2019-04-26 14:07:05
   * @version V1.0.0
   */
  async deletePerson(id) {
    let result = await dbUtils.deleteDataById(tableName, id)
    let returnData = await catchData.catchData(result)
    return returnData
  }
}

module.exports = person