import React from 'react'
import _ from 'lodash'

class MixinPage extends React.Component{

  componentDidMount() {
    this.doMixin()
  }

  doMixin() {
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

    _.extend(User.prototype, logMixin)
    _.extend(Goods.prototype, logMixin)

    // 创建实例
    var user = new User()
    var good = new Goods()

    user.actionLog()
    good.requestLog()
  }

  render() {
    return(
      <div>
        mixin
      </div>
    )
  }
}

export default MixinPage