function Promise(fn) {
  let self = this
  self.status = 'pending'
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  // promise已经确定了
  function resolve(value) {
    if (self.status === 'pending') {
      self.data = value
      self.status = 'resolved'
      let f 
      for (let i = 0; i < self.resolvedCallbacks.length; i++) {
        // 这样调用会有问题。this的指向为数组了，标准里面只能指向undefined
        // self.resolvedCallbacks[i](value)
  
        f = self.resolvedCallbacks[i]
        f(value)
      }
    }
  }

   // promise已经确定了
   function reject(reason) {
    if (self.status === 'pending') {
      self.data = value
      self.status = 'rejected'
      let f 
      for (let i = 0; i < self.rejectedCallbacks.length; i++) {
        // 这样调用会有问题。this的指向为数组了，标准里面只能指向undefined
        // self.resolvedCallbacks[i](value)
  
        f = self.rejectedCallbacks[i]
        f(value)
      }
    }
  }


  function reject(reason) {
    
  }
  try {
    fn(resolve, reject)
    
  } catch(err) {
    reject(err)
  }
}


Promise.prototype.then = function (onResolved, onRejected) {
  let self = this

  if (typeof onResolved !== 'function') {
    // 如果不是函数，就变成函数
    onResolved = function () {}
  }

  if (typeof onRejected !== 'function') {
    onRejected = function () {}
  }

  let promise2
  if (self.status === 'resolved') {
    // 如果是resolved ,那就返回一个新的promise
    promise2 = new Promise(function(resolve, reject) {
      try {
        let x = onResolved(self.data)
        if (x instanceof Promise) {
          x.then(function(value){
            resolve(value)
          }, function (reason) {
            reject(reason)
          })
        } else {
          resolve(x)
        }
      }catch(err) {
        reject(err)
      }

    })
  }

  if (self.status === 'rejected') {
    // 如果是resolved ,那就返回一个新的promise
    promise2 = new Promise(function(resolve, reject) {
      try {
        let x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(function(value){
            resolve(value)
          }, function (reason) {
            reject(reason)
          })
        } else {
          resolve(x)
        }
      }catch(err) {
        reject(err)
      }
    })
  }

  if (self.status === 'pending') {
    promise2 = new Promise((resolve, reject) => {
      self.resolvedCallbacks.push(function (value) {
        try {
          let x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        }catch(err) {
          reject(err)
        }
      })

      self.rejectedCallbacks.push(function (reason) {
        try {
          let x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(function(value){
              resolve(value)
            }, function (reason) {
              reject(reason)
            })
          } else {
            resolve(x)
          }
        }catch(err) {
          reject(err)
        }
      })
    })
  }

  return promise2
  
}

// 测试
Promise.deferred = function () {
  let dfd = {
  }



  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })

  return dfd

}

module.exports = Promise