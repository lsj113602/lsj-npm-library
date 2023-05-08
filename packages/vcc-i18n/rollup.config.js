// rollup.config.js
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const createConfig = () => {
  console.log('55555555---------------------');
  return {
    input: 'src/index.js',
    output: [{
      name: 'vcc-i18n',
      file: `dist/vcc-i18n.esm.js`,
      format: 'esm'
    },{
      name: 'vcc-i18n',
      file: `dist/vcc-i18n.umd.js`,
      format: 'umd'
    },],
    plugins: [
      json(),
      nodeResolve()
    ]
  }
}
module.exports = createConfig()
