const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function isFunction(fn) {
  return typeof func === 'function'
}

function isObject(obj) {
  return typeof obj === 'object'
}

function isArray(arr) {
  return Array.isArray(arr)
}

function dealFn(this, fn) {
 let called = false
  try {
    fn(function (value) {
      if (called) return
      called = true
      goResolve(self, value)
    }, function(error) {
      if (called) return 
      called = true
      goReject(self, error)
    })
  } catch(error) {
    if (called) return
    called = true
    goReject(self, error)
  }
}

function goResolve(self, value) {
  try {

  } catch(error) {

  }
}

function goReject(self, error) {
  
}




function Promise(fn) {
  if (!isFunction(fn)) throw new Error('fn must be function')
  this.state = PENDING
  this.value = undefined
  this.queue = []
  dealFn(this, fn)
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