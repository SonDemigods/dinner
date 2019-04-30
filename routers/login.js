/**
 * @description 登录路由
 * @author 张航
 * @date 2019-04-03 13:49:32
 * @version V1.0.0
 */

const router = require('koa-router')()
const login = require('../controllers/login')

module.exports = router.post('/', login.login)