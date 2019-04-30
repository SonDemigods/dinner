/**
 * @functionName catchData
 * @param {Object} data 返回数据
 * @return {Object} 返回结果
 * @description 错误处理
 * @author 张航
 * @date 2019-04-29 09:30:31
 * @version V1.0.0
 */
let catchData = function (data) {
  return data
}
/**
 * @functionName catchPage
 * @param {Object} data 返回数据
 * @return {Object} 返回结果
 * @description 分页错误处理
 * @author 张航
 * @date 2019-04-29 09:30:31
 * @version V1.0.0
 */
let catchPage = function (data, current, total) {
  let result = {
    row: data,
    total: total[0].total,
    current: current
  }
  return result
}

module.exports = {
  catchData,
  catchPage
}