import React from 'react';
import {connect} from 'react-redux';

import { addTodoItem } from '../../store/action'

class TodoHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>
        <div>您有 {this.getUnfinishedCount()} 件事情未完成</div>
        <label htmlFor="content">待办项：</label>
        <input
          type="text"
          id="content"
          value={this.state.content}
          onChange={e => this.handleInputChange(e)}
        />
        <button
          type="button"
          onClick={() => this.handleAddItem()}
        >添加</button>
      </div>
    )
  }

  handleInputChange(e) {
    const content = e.target.value
    this.setState({ content })
  }

  handleAddItem() {
    const { content } = this.state
    if (!content) {
      alert('请输入内容！')
      return
    }
    const { addTodoItem } = this.props
    const newItem = {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: content
    }
    addTodoItem(newItem)
    this.setState({ content: '' })
  }

  getUnfinishedCount() {
    const count = this.props.todos.filter(item => {
      return item.isComplete === false
    }).length
    return count
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  addTodoItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader)