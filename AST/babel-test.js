const fs = require('fs')
module.exports = function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }
        path.node.left = t.identifier("hello");
        path.node.right = t.identifier("godkun");
      }
    }
  };
}
