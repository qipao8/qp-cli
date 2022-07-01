#! node

// console.log(1)
const { program, Option } = require('commander')

program.version(`Version is ${require('../package.json').version}`)
    .usage('<command> [options]')
    .description('lm的第一个脚手架')

program.command('hello')
    .description('向美女打招呼')
    .action(require('../lib/hello'))

program.command('init <name>')
    .description('初始化项目')
    .action((name) => require('../lib/init')(name))

program
    .command('refresh')
    .description('刷新路由...')
    .action(require('../lib/refresh'))

program
    .command('serve')
    .description('serve')
    .action(require('../lib/serve'))

program.parse(process.argv);