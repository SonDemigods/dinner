/**
 * @description 工作服务
 * @author 张航
 * @date 2019-04-10 09:26:24
 * @version V1.0.0
 */
const workModel = require('../models/work')

const work = {
  /**
   * @functionName creatWork
   * @param {Object} data 工作信息
   * @return {Object|null} 返回结果
   * @description 新增工作
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async creatWork(data) {
    let resultData = await workModel.creatWork(data)
    return resultData
  },
  /**
   * @functionName getWorkList
   * @param {Object} data 查找条件
   * @return {Object|null} 返回结果
   * @description 查找工作列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkList(data) {
    let resultData = await workModel.getWorkList(data)
    return resultData
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
    let resultData = await workModel.getWorkPage(pageSize, current, date)
    return resultData
  },
  /**
   * @functionName getWork
   * @param {Number} id 工作id
   * @return {Object|null} 返回结果
   * @description 查找工作
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWork(id) {
    let resultData = await workModel.getWork(id)
    return resultData
  },
  /**
   * @functionName modifyWork
   * @param {Object} data 工作信息
   * @param {Number} id 工作信息id
   * @return {Object|null} 返回结果
   * @description 修改工作
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async modifyWork(data, id) {
    let resultData = await workModel.modifyWork(data, id)
    return resultData
  },
  // /**
  //  * @functionName leaveWork
  //  * @param {Object} date 打卡时间
  //  * @param {Number} id 工作信息id
  //  * @return {Object|null} 返回结果
  //  * @description 记录打卡时间
  //  * @author 张航
  //  * @date 2019-04-10 09:16:07
  //  * @version V1.0.0
  //  */
  // async leaveWork(date, id) {
  //   let resultData = await workModel.modifyWork(date, id)
  //   return resultData
  // },
  /**
   * @functionName deleteWork
   * @param {Object} id 查找条件
   * @return {Object|null} 返回结果
   * @description 删除工作
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async deleteWork(id) {
    let resultData = await workModel.deleteWork(id)
    return resultData
  },
}

module.exports = work