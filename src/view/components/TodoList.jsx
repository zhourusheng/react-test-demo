import React from 'react';
import {connect} from 'react-redux';

import { toggleItemStatus, deleteTodoItem } from '../../store/action'

class TodoList extends React.Component {

  filterDisplayList() {
    const { todos, display } = this.props
    const newArr = todos.filter(item => {
      switch (display) {
        case 'completed':
          return item.isComplete
        case 'uncompleted':
          return !item.isComplete
        case 'all':
            return true
        default:
          return true
      }
    })
    return newArr
  }

  renderTodoList() {
    return this.filterDisplayList().map((item, index) => {
      return (
        <li key={index}>
          <input
            type="checkbox"
            defaultChecked={item.isComplete}
            value={item.id}
            onChange={e => this.handleTodoChange(e)}
          />
          { item.isComplete
            ? <del>{item.title}</del>
            : <span>{item.title}</span> }
          <button
            type="button"
            data-id={item.id}
            onClick={() => this.handleItemDelete(item.id)}
          >删除</button>
        </li>
      )
    })
    
  }

  handleItemDelete(id) {
    const itemId = Number(id)
    const { deleteTodoItem } = this.props
    deleteTodoItem(itemId)
  }

  handleTodoChange(e) {
    const itemId = Number(e.target.value)
    const { toggleItemStatus } = this.props
    toggleItemStatus(itemId)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  toggleItemStatus,
  deleteTodoItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)