import React from 'react'


class Student extends React.Component {
  static sayHello() {
    console.log('hello from Student')
  }

  constructor(props) {
    super(props)
    console.log('Student constructor')
    this.focus = this.focus.bind(this)
  }

  componentWillMount() {
    console.log('Student componentWillMount')
    this.setState({
      name: this.props.name,
      age: this.props.age
    })
  }

  componentDidMount() {
    console.log('Student componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Student componentWillReceiveProps')
    console.log(nextProps)
  }

  focus() {
    this.inputElement.focus()
  }

  render() {
    return(
      <div>
        <p>姓名：{this.state.name}</p>
        <p>年龄：
          <input
            type="text"
            value={this.state.age}
            ref={input => {
              this.inputElement = input
              this.props.inputRef(input)
            }}
          />
        </p>
        <p><input type="button" value="focus input" onClick={this.focus} /></p>
      </div>
    )
  }
}

export default Student