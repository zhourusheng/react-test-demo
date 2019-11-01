import React from 'react'

import Board from './Board'
import calculateWinner from './calculateWinner'

import './index.css'

class Game extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      history: [
        {
          // Array 本身是一个构造函数，可以用 Array() 生成新的数组
          // fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(index) {
    const { history: historyState, stepNumber, xIsNext } = this.state
    const history = historyState.slice(0, stepNumber + 1)
    const current = history[history.length - 1]
    // slice() 没有参数，实际上等于返回一个原数组的拷贝
    const squares = current.squares.slice()

    if(calculateWinner(squares) || squares[index]) {
      return
    }

    squares[index] = xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    })

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const { history,stepNumber, xIsNext } = this.state
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, index) => {
      const desc = index ? 'Go to move #' + index : 'Go to start game'
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      )
    })

    let status
    if(winner) {
      status = 'Winner:' + winner
    } else {
      status = "Next Player:" + (xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    )
  }
}


export default Game