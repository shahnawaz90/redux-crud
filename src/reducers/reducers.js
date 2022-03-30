//
// API Reducer
//

import { actions } from "../constants";
// Actions
const {
  LIST_TODO_ITEMS,
  LIST_TODO_ITEMS_SUCCESS,
  LIST_TODO_ITEMS_FAILED,
  ADD_TODO_ITEM,
  ADD_TODO_ITEM_SUCCESS,
  ADD_TODO_ITEM_FAILED,
  UPDATE_TODO_ITEM,
  UPDATE_TODO_ITEM_SUCCESS,
  UPDATE_TODO_ITEM_FAILED
} = actions;

const initialState = {
  fetchingTodoItems: false,
  todoItems: [],
  addingTodoItem: false,
  updatingTodoItem: false,
  error: ''
};

/**
 * Modals reducer
 * @param {Object} state - Current state.
 * @param {Object} action - Action
 * @returns {Object} - New state
 */
function reducers(state = initialState, action) {
  const { payload = {} } = action;
  switch (action.type) {
    case LIST_TODO_ITEMS:
      return {
        ...state,
        fetchingTodoItems: true
      };
    case LIST_TODO_ITEMS_SUCCESS:
      return {
        ...state,
        fetchingTodoItems: false,
        todoItems: payload.data.data
      };
    case LIST_TODO_ITEMS_FAILED:
      return {
        ...state,
        fetchingTodoItems: false,
        error: payload.error
      };
    case ADD_TODO_ITEM:
      return {
        ...state,
        addingTodoItem: true
      };
    case ADD_TODO_ITEM_SUCCESS:
      return {
        ...state,
        addingTodoItem: false
      };
    case ADD_TODO_ITEM_FAILED:
      return {
        ...state,
        addingTodoItem: false,
        error: payload.error
      };
    case UPDATE_TODO_ITEM:
      return {
        ...state,
        updatingTodoItem: true
      };
    case UPDATE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        updatingTodoItem: false
      };
    case UPDATE_TODO_ITEM_FAILED:
      return {
        ...state,
        updatingTodoItem: false,
        error: payload.error
      };
    default:
      return state;
  }
}

export default reducers;
