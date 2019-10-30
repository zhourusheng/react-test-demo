import React from 'react';

import { connect } from 'react-redux';

import { changeTodoDisplay } from '../../store/action'

class TodoFooter extends React.Component {
  constructor() {
    super()
    this.buttonList = [
      {
        value: 'all',
        text: '全部'
      },
      {
        value: 'completed',
        text: '已完成'
      },
      {
        value: 'uncompleted',
        text: '未完成'
      }
    ]
  }

  renderButton() {
    const { display } = this.props
    return this.buttonList.map(item => {
      return (
        <button
          disabled={item.value === display}
          key={item.value}
          onClick={() => this.handleStateClick(item.value)}
        >
          {item.text}
        </button>
      )
    })
  }

  handleStateClick(value) {
    const { changeTodoDisplay } = this.props
    changeTodoDisplay(value)
  }

  render() {
    return (
      <div>
        {this.renderButton()}
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
  changeTodoDisplay
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFooter)