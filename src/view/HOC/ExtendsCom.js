import React from 'react'
import Student from './Student'

function EnhanceWrapper(WrappedComponent) {
  return class WrapperComponent extends WrappedComponent {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }


    render() {
      return (
        <div>
          {super.render()}
        </div>
      )
    }
  }
}