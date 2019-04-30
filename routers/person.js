/**
 * @description 人员路由
 * @author 张航
 * @date 2019-04-03 13:49:32
 * @version V1.0.0
 */

const router = require('koa-router')()
const person = require('../controllers/person')

module.exports = router.post('/creatPerson', person.creatPerson)
  .post('/getPersonList', person.getPersonList)
  .post('/getPersonPage', person.getPersonPage)
  .post('/getPerson', person.getPerson)
  .post('/getPersonName', person.getPersonName)
  .post('/modifyPerson', person.modifyPerson)
  .post('/deletePerson', person.deletePerson)