/**
 * @description 路由配置文件
 * @author 张航
 * @date 2019-04-03 13:47:41
 * @version V1.0.0
 */

const router = require('koa-router')()

const login = require('./login')
const person = require('./person')
const food = require('./food')
const work = require('./work')

router.use('/login', login.routes(), login.allowedMethods())
router.use('/person', person.routes(), person.allowedMethods())
router.use('/food', food.routes(), food.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())

module.exports = router