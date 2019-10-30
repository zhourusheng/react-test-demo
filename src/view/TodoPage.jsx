import React from 'react'

import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    )
  }
}

// https://www.jianshu.com/p/786e7174b0c2

export default  TodoPage