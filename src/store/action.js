import {
  ADD_TODO,
  DELETE_ITEM,
  TOGGLE_COMPLETE,
  CHANGE_DISPLAY
} from './action-types'

export const addTodoItem = payload => ({
  type: ADD_TODO,
  payload
})

export const toggleItemStatus = payload => ({
  type: TOGGLE_COMPLETE,
  payload
})

export const deleteTodoItem = payload => ({
  type: DELETE_ITEM,
  payload
})

export const changeTodoDisplay = payload => ({
  type: CHANGE_DISPLAY,
  payload
})



