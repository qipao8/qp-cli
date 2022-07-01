const { promisify } = require('util')
const { foo } = require('./run')
module.exports.clone = async (repo, desc) => {
    const download = promisify(require('download-git-repo'))
    // const ora=require('ora')
    // const spinner=ora(`下载......${repo}`)
    // spinner.start()
    await download(repo, desc, err => {
        console.log(err ? 'Error' : 'Success')
        if (err) console.log(err)
        else {
            foo(desc)
        }
    })
    // spinner.succeed()
}