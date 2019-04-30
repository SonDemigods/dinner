/**
 * @description 人员服务
 * @author 张航
 * @date 2019-04-10 09:26:24
 * @version V1.0.0
 */
const personModel = require('../models/person')

const person = {
  /**
   * @functionName creatPerson
   * @param {Object} data 人员信息
   * @return {Object|null} 返回结果
   * @description 新增用户
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async creatPerson(data) {
    let resultData = await personModel.creatPerson(data)
    return resultData
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
    let resultData = await personModel.getPersonList(data)
    return resultData
  },
  /**
   * @functionName getPersonPage
   * @param {Number} pageSize 分页条数
   * @param {Number} current 分页
   * @return {Object|null} 返回结果
   * @description 查找人员分页
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPersonPage(pageSize, current) {
    let resultData = await personModel.getPersonPage(pageSize, current)
    return resultData
  },
  /**
   * @functionName getPerson
   * @param {Number} id 人员id
   * @return {Object|null} 返回结果
   * @description 查找用户
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPerson(id) {
    let resultData = await personModel.getPerson(id)
    return resultData
  },
  /**
   * @functionName getPersonName
   * @param {String} name 人员姓名
   * @return {Object|null} 返回结果
   * @description 查找用户姓名
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getPersonName(name) {
    let resultData = await personModel.getPersonName(name)
    return resultData
  },
  /**
   * @functionName modifyPerson
   * @param {Object} data 人员信息
   * @param {Number} id 人员id
   * @return {Object|null} 返回结果
   * @description 修改人员
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async modifyPerson(data, id) {
    let resultData = await personModel.modifyPerson(data, id)
    return resultData
  },
  /**
   * @functionName deletePerson
   * @param {Object} id 查找条件
   * @return {Object|null} 返回结果
   * @description 删除人员
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async deletePerson(id) {
    let resultData = await personModel.deletePerson(id)
    return resultData
  },
}

module.exports = person