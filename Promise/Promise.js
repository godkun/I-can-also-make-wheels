function Promise(fn) {
 if (typeof(fn) !== 'function')
   throw new Error('must be function')
  let that = this
  dealFn(that, fn)

  function dealFn(self, fn) {

  }
}

Promise.prototype.then = function () {
  
}

Promise.prototype.reject = function () {
  
}

Promise.resolve = function () {
  
}

Promise.reject = function () {
  
}

Promise.all = function () {
  
}

Promise.race = function () {
  
}

module.exports = Promise