module.exports = function ({ types: t }) {
  return {
    visitor: {
      ExpressionStatement(path, { opts }) {
        const { object, property } = path.node.expression.callee
        if (object.name !== 'console') return
        const isIgnore = (opts.ignore || []).find(ele => ele === property.name)
        if (!isIgnore) path.remove()
      }
    }
  }
}