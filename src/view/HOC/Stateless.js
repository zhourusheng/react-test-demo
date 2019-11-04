import React from 'react'
import Student from './Student'


function EnhanceWrapper(WrappedComponent) {
  let inputElement = null

  function handleClick() {
    inputElement.focus()
  }

  function wrappedComponentStaic() {
    WrappedComponent.sayHello()
  }

  return props => (
    <div>
      <WrappedComponent
        inputRef={el => inputElement = el}
        {...props}
      />
      <input
        type="button"
        value="focus子组件input"
        onClick={handleClick}
      />
      <input
        type="button"
        value="调用子组件static"
        onClick={wrappedComponentStaic}
      />
    </div>
  )
}


const WrappedComponent = EnhanceWrapper(Student)


export default WrappedComponent