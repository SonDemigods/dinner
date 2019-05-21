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

let handWorkList = function (data) {
  data.map(item => {
    switch (item.type) {
      case 1:
        item.typeText = '集体'
        break;
      case 2:
        item.typeText = '个人'
        break;
      default:
        item.typeText = '无'
        break;
    }
    switch (item.invoiceType) {
      case 1:
        item.invoiceTypeText = '定额'
        break;
      case 2:
        item.invoiceTypeText = '机打'
        break;
      case 3:
        item.invoiceTypeText = '电子'
        break;
      default:
        item.invoiceTypeText = '无'
        break;
    }
  })
  return data
}

module.exports = {
  catchData,
  catchPage,
  handWorkList
}