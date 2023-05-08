// rollup.config.js
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const createConfig = () => {
  console.log('6666666---------------------');
  return {
    input: 'src/index.js',
    output: {
      name: 'lsj-utils',
      file: `dist/lsj-utils.esm.js`,
      format: 'esm'
    },
    plugins: [
      json(),
      nodeResolve()
    ]
  }
}
module.exports = createConfig()
