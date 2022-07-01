const chalk = require('chalk')

module.exports.foo = async (name)=>{
    const log = content => console.log(chalk.green(content))
    const syncSpawn = (...args) => {
        const { spawn } = require('child_process')
        const options = args[args.length - 1]
        if (process.platform === 'win32') {
            console.log('win32')
            options.shell = true
        } else console.log('Linux/Unix')
        // 同步Promise api
        return new Promise(resolve => {
            const proc = spawn(...args)
            proc.stdout.pipe(process.stdout)
            const ret = []
            proc.stdout.on('data', data => {
                ret.push(data)
            })
            proc.on('close', () => {
                resolve(Buffer.concat(ret).toString())
            })
        })
    }

    log(`🚀安装依赖....`)
    await syncSpawn('cnpm', ['install'], { cwd: `./${name}` })
    log(chalk.green(`
        👌安装完成：
        To get Start:
        ===========================
            cd ${name}
            npm run serve
        ===========================
                    `))

    const open = require('open')
    open('http://localhost:8080')
    await syncSpawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}