const path = require('path')
const Koa = require('koa')
// pengchenggang test2
// const convert = require('koa-convert')
// const views = require('koa-views')
// const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const koaLogger = require('koa-logger')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

const config = require('./config')
const routers = require('./routers/index')

const app = new Koa()

// session存储配置
const sessionMysqlConfig = {
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  host: config.dataBase.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 配置控制台日志中间件
app.use(koaLogger())

// 跨域
app.use(cors())

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname, './../static')
// ))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


// app.use(cors({
//   origin: function (ctx) {
//     if (ctx.url === '/cors') {
//       return "*"; // 允许来自所有域名请求
//     }
//     return `http://192.168.40.105:${config.port}`;
//   },
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   allowMethods: ['GET', 'POST'], //设置允许的HTTP请求类型
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));

// 监听启动端口
app.listen(config.port)
console.log(`http://192.168.40.105:${config.port}`)