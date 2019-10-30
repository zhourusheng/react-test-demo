import {
  ADD_TODO,
  DELETE_ITEM,
  CHANGE_DISPLAY,
  TOGGLE_COMPLETE
} from './action-types'

let initState = {
  display:'all',
  todos: [
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习redux'
    },
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: true,
      title: '学习react'
    },
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习node'
    }
  ]
}

const todoReducer = (state = initState, action) => {
  let newState
  switch (action.type) {
    case ADD_TODO:
      newState = {
        todos: [
          ...state.todos,
          action.payload
        ]
      }
      break;

    case DELETE_ITEM:
        newState = {
          todos: state.todos.filter(item => {
            return item.id !== action.payload
          })
        }
        break;

    case TOGGLE_COMPLETE:
      newState = {
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            item.isComplete = !item.isComplete
          }
          return item
        })
      }
      break;

    case CHANGE_DISPLAY:
        newState = {
          display: action.payload,
          todos: [...state.todos]
        }
        break;

    default:
      newState = state
      break;
  }
  return newState
}

export default todoReducer