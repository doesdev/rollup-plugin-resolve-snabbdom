const pkg = require('./package.json')

export default {
  input: 'source.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]
}
