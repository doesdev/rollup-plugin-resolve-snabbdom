'use strict'

export default () => {
  return {
    name: 'rollup-plugin-resolve-snabbdom',
    resolveId: async (specifier, importer) => {
      if (specifier.indexOf('snabbdom/')) return null
      return `node_modules/snabbdom/build/package/${specifier.slice(9)}.js`
    }
  }
}
