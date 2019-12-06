/**
 * @description 工作数据
 * @author 张航
 * @date 2019-04-28 09:14:04
 * @version V1.0.0
 */
const dbUtils = require('../utils/db')
const catchData = require('../utils/catchData')
const logger = require('koa-logger')

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
   * @param {String} start 开始时间
   * @param {String} end 结束时间
   * @return {Object|null} 返回结果
   * @description 查找工作列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkList(start, end) {
    let date = `where w.date between '${start}' and '${end}'`
    let _sql = `select w.*,p.name as personName,f.name as foodName from work w LEFT JOIN food f on f.id = w.fid LEFT JOIN person p on p.id = w.pid ${date}`
    let result = await dbUtils.query(_sql)
    let returnData = await catchData.handWorkList(result)
    return returnData
  },
  /**
   * @functionName getWorkListByPersonId
   * @param {String} pid 人员id
   * @return {Object|null} 返回结果
   * @description 根据人员id查找工作列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkListByPersonId(pid) {
    let _sql = `select w.*,p.name as personName,f.name as foodName from work w LEFT JOIN food f on f.id = w.fid LEFT JOIN person p on p.id = w.pid where w.pid = ${pid}`
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
  async getWorkPage(pageSize, current, date, pid) {
    let start = pageSize * (current - 1)
    let end = pageSize * current
    let dateSql = date === '' ? '' : `WHERE w.date = '${date}'`
    let pidSql = pid === '' ? '' : `WHERE p.id = '${pid}'`
    let _sql = `SELECT w.*,p.name AS personName,f.name AS foodName FROM work w LEFT JOIN food f ON f.id = w.fid LEFT JOIN person p ON p.id = w.pid ${dateSql} ${pidSql} ORDER BY id desc LIMIT ${start}, ${end}`
    // console.info(`_sql: ${_sql}`)
    let result = await dbUtils.query(_sql)
    let dateSqlCount = date === '' ? '' : `WHERE date = '${date}'`
    let pidSqlCount = pid === '' ? '' : (dateSql === '' ? `WHERE pid = '${pid}'` : ``)
    let _sqlCount = `SELECT COUNT(*) AS total FROM ${tableName} ${dateSqlCount}${pidSqlCount}`
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