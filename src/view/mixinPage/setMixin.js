function setMixin(target, mixin) {
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      target.prototype[arguments[i]] = mixin.prototype[arguments[i]];
    }
  }
  else {
    for (var methodName in mixin.prototype) {
      if (!Object.hasOwnProperty(target.prototype, methodName)) {
        target.prototype[methodName] = mixin.prototype[methodName];
      }
    }
  }
}

// 所要混入的方法和属性
var logMixin = {
  actionLog: function() {
    console.log('action...')
  },
  requestLog: function() {
    console.log('request...')
  }
}

// 构造函数，相当于页面或组件
function User() {
  // 
}
function Goods() {
  // 
}

setMixin(User, logMixin, 'actionLog')
setMixin(Goods, logMixin, 'requestLog')

// 创建实例
var user = new User()
var good = new Goods()

user.actionLog()
good.requestLog()

