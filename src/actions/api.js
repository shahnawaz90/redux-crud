import http from "../utils/httpCommon";
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

export const fetchTodoItems = () => {
  return (dispatch) => {
    dispatch({
      type: LIST_TODO_ITEMS,
      payload: true
    });
    http.get('/api/users')
      .then((resp) => {
        dispatch({
          type: LIST_TODO_ITEMS_SUCCESS,
          payload: {
            data: resp.data
          }
        });
      })
      .catch((ex) => {
        dispatch({
          type: LIST_TODO_ITEMS_FAILED,
          payload: false
        });
      });
  };
};

export const createNewItem = (inputs) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ADD_TODO_ITEM,
        payload: true
      });
      http.post('/api/users', inputs)
        .then((resp) => {
          dispatch({
            type: ADD_TODO_ITEM_SUCCESS,
            payload: {
              data: resp.data
            }
          });
          resolve();
        })
        .catch((ex) => {
          dispatch({
            type: ADD_TODO_ITEM_FAILED,
            payload: false
          });
          reject()
        });
    });
  };
}