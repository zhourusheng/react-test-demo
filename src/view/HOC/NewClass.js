import React from 'react'
import Student from './Student'

function EnhanceWrapper(WrappedComponent) {
  return class WrapperComponent extends React.Component {

    static wrappedComponentStatic() {
      WrappedComponent.sayHello()
    }

    constructor(props) {
      super(props)
      console.log('WrapperComponent constructor')
      this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
      console.log('WrapperComponent componentWillMount');
    }

    componentDidMount() {
      console.log('WrapperComponent componentDidMount')
    }

    handleClick() {
      this.inputElement.focus()
    }

    render() {
      return(
        <div>
          <WrappedComponent
            inputRef={input => this.inputElement = input}
            {...this.props}
          />
          <input
            type="button"
            value="focus子组件input"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="调用子组件static"
            onClick={this.wrappedComponentStaic}
          />
        </div>
      )
    }
  }
}

export default EnhanceWrapper(Student)