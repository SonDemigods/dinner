/**
 * @description 项目配置文件
 * @author 张航
 * @date 2019-04-03 11:49:16
 * @version V1.0.0
 */
const config = {
  port: 2000, // 启动端口
  dataBase: { // 数据库配置
    HOST: '192.168.40.105', // 地址
    PORT: '3306', // 端口
    USERNAME: 'root', // 用户
    PASSWORD: '123456', // 密码
    DATABASE: 'dinner' // 名称
  }
}

module.exports = config