/**
 * @description 菜品路由
 * @author 张航
 * @date 2019-04-03 13:49:32
 * @version V1.0.0
 */

const router = require('koa-router')()
const food = require('../controllers/food')

module.exports = router.post('/creatFood', food.creatFood)
  .post('/getFoodList', food.getFoodList)
  .post('/getFoodPage', food.getFoodPage)
  .post('/getFood', food.getFood)
  .post('/modifyFood', food.modifyFood)
  .post('/deleteFood', food.deleteFood)