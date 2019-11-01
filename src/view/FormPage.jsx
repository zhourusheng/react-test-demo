import React from 'react'

class FormPage extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()
  }

  // 非受控组件，表单状态通过 DOM 节点来处理，通过 refs 获取

  handleSubmit(event) {
    alert('form input name is:' + this.input.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue="hahaha" type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default FormPage