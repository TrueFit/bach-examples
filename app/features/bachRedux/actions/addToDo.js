export const ADD_TODO = 'ADD_TODO';

export const addToDo = note => ({
  type: ADD_TODO,
  payload: note,
});
