/**
 * @description 工作路由
 * @author 张航
 * @date 2019-04-03 13:49:32
 * @version V1.0.0
 */

const router = require('koa-router')()
const work = require('../controllers/work')

module.exports = router.post('/creatWork', work.creatWork)
  .post('/getWorkList', work.getWorkList)
  .post('/getWorkListByPersonId', work.getWorkListByPersonId)
  .post('/getWorkPage', work.getWorkPage)
  .post('/getWork', work.getWork)
  .post('/modifyWork', work.modifyWork)
  .post('/leaveWork', work.leaveWork)
  .post('/deleteWork', work.deleteWork)