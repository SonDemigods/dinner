/**
 * @description 工作控制
 * @author 张航
 * @date 2019-04-28 09:13:37
 * @version V1.0.0
 */
const work = require('../services/work')

module.exports = {
  /**
   * @functionName creatWork
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 新增工作
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async creatWork(ctx) {
    let form = ctx.request.body
    let {
      pid,
      fid,
      type,
      date,
      remark
    } = form
    let workData
    if (type === '1') {
      workData = {
        pid,
        fid,
        type,
        date,
        remark
      }
    } else {
      workData = {
        pid,
        type,
        date,
        remark
      }
    }
    let data = await work.creatWork(workData)
    ctx.body = data
  },
  /**
   * @functionName getWorkList
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询工作列表
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getWorkList(ctx) {
    let form = ctx.request.body
    let {
      start,
      end
    } = form
    let data = await work.getWorkList(start, end)
    ctx.body = data
  },
  /**
   * @functionName getWorkListByPersonId
   * @param {Object} ctx 查询条件
   * @return {Object|null} 返回结果
   * @description 根据人员id查找工作列表
   * @author 张航
   * @date 2019-04-10 09:16:07
   * @version V1.0.0
   */
  async getWorkListByPersonId(ctx) {
    let form = ctx.request.body
    let pid = form.pid
    let data = await work.getWorkListByPersonId(pid)
    ctx.body = data
  },
  /**
   * @functionName getWorkPage
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询工作分页
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getWorkPage(ctx) {
    let form = ctx.request.body
    let {
      pageSize,
      current,
      date = '',
      pid = ''
    } = form
    console.info(`getWorkPage pid ${pid}`)
    let data = await work.getWorkPage(pageSize, current, date, pid)
    ctx.body = data
  },
  /**
   * @functionName getWork
   * @param {Object} ctx 查询条件
   * @return {Array} 返回结果
   * @description 查询工作
   * @author 张航
   * @date 2019-04-26 17:11:41
   * @version V1.0.0
   */
  async getWork(ctx) {
    let id = ctx.request.body.id
    let data = await work.getWork(id)
    if (data.length < 2) {
      data = data[0]
    }
    ctx.body = data
  },
  /**
   * @functionName modifyWork
   * @param {Object} ctx 修改数据
   * @return {Object} 返回结果
   * @description 修改工作
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async modifyWork(ctx) {
    let form = ctx.request.body
    let {
      id,
      pid,
      fid,
      type,
      date,
      remark
    } = form
    let workData = {
      pid,
      fid: type === '2' ? null : fid,
      type,
      date,
      remark
    }
    let data = await work.modifyWork(workData, id)
    ctx.body = data
  },
  /**
   * @functionName leaveWork
   * @param {Object} ctx 修改数据
   * @return {Object} 返回结果
   * @description 修改打卡时间
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async leaveWork(ctx) {
    let form = ctx.request.body
    let {
      id,
      leave,
      invoiceType
    } = form
    let data = await work.modifyWork({
      leave,
      invoiceType
    }, id)
    ctx.body = data
  },
  /**
   * @functionName deleteWork
   * @param {Object} ctx 删除id
   * @return {Object} 返回结果
   * @description 删除工作
   * @author 张航
   * @date 2019-04-28 08:47:45
   * @version V1.0.0
   */
  async deleteWork(ctx) {
    let id = ctx.request.body.id
    let data = await work.deleteWork(id)
    ctx.body = data
  }
}