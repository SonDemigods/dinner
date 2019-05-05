/**
 * @description 工作数据
 * @author 张航
 * @date 2019-04-28 09:14:04
 * @version V1.0.0
 */
const dbUtils = require('../utils/db')
const catchData = require('../utils/catchData')
const tableName = 'work'

const work = {
  /**
   * @functionName creatWork  
   * @param {Object} data 工作数据
   * @return {Boolean} 返回结果
   * @description 新增工作
   * @author 张航
   * @date 2019-04-26 14:01:56
   * @version V1.0.0
   */
  async creatWork(data) {
    let result = await dbUtils.insertData(tableName, data)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName getWorkList
   * @param {Object} data 查找条件
   * @return {Object|null} 返回结果
   * @description 查找用户列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkList(data) {
    let _sql = 'select w.*,p.name as personName,f.`name` as foodName from work w LEFT JOIN food f on f.id = w.fid LEFT JOIN person p on p.id = w.pid'
    let result = await dbUtils.query(_sql)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName getWorkPage
   * @param {Number} pageSize 分页条数
   * @param {Number} current 分页
   * @return {Object|null} 返回结果
   * @description 查找工作分页
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkPage(pageSize, current, date) {
    let start = pageSize * (current - 1)
    let end = pageSize * current
    let dateSql = date === '' ? '' : `where w.date = '${date}'`
    let _sql = `select w.*,p.name as personName,f.name as foodName from work w LEFT JOIN food f on f.id = w.fid LEFT JOIN person p on p.id = w.pid ${dateSql} order by id desc LIMIT ${start}, ${end}`
    let result = await dbUtils.query(_sql)
    let dateSqlCount = date === '' ? '' : `where date = '${date}'`
    let _sqlCount = `SELECT COUNT(*) AS total FROM ${tableName} ${dateSqlCount}`
    let count = await dbUtils.query(_sqlCount)
    let returnData = await catchData.catchPage(result, current, count)
    return returnData
  },
  /**
   * @functionName getWork
   * @param {Object} id 工作id
   * @return {Object|null} 返回结果
   * @description 查找工作
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWork(id) {
    let _sql = `select w.*,p.name as personName,f.name as foodName from work w LEFT JOIN food f on f.id = w.fid LEFT JOIN person p on p.id = w.pid where w.id=${id}`
    let result = await dbUtils.query(_sql)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName modifyWork
   * @param {Object} data 工作数据
   * @param {Number} id 工作信息id
   * @return {Boolean} 返回结果
   * @description 修改工作
   * @author 张航
   * @date 2019-04-26 14:04:36
   * @version V1.0.0
   */
  async modifyWork(data, id) {
    let result = await dbUtils.updateData(tableName, data, id)
    let returnData = await catchData.catchData(result)
    return returnData
  },
  /**
   * @functionName  deleteWork
   * @param {Object} id 工作id
   * @return {Boolean} 返回结果
   * @description 删除工作
   * @author 张航
   * @date 2019-04-26 14:07:05
   * @version V1.0.0
   */
  async deleteWork(id) {
    let result = await dbUtils.deleteDataById(tableName, id)
    let returnData = await catchData.catchData(result)
    return returnData
  }
}

module.exports = work