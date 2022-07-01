//打印欢迎界面
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const { clone } = require('./download')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))


module.exports = async name => {
    clear()
    const data = await figlet('LM Welcome')
    log(data)
    log('🚀创建项目' + name)
    await clone('github.com:qipao8/vue2-demo', name)
}