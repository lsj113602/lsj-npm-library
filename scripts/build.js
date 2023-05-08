const fs = require('fs')
const execa = require('execa');

// 取出来packages下所有的包
const pkgs = fs.readdirSync('packages').filter(p => {
  return fs.statSync(`packages/${p}`).isDirectory()
})

console.log('111111------------', pkgs)

const runParallel = (targets, buildFn) => {
  const res = []
  for (const target of targets) {
    res.push(buildFn(target))
  }
  return Promise.all(res)
}
// 执行rollup -c --environment TARGET:shared
const build = async (pkg) => {
  await execa('rollup', ['-c', '--environment', `TARGET:${pkg}`], { stdio: 'inherit' })
}

runParallel(pkgs, build)
