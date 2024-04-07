
export const CREATE_TASK = 'CREATE_TASK';
export const READ_TASKS = 'READ_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});

export const readTasks = (tasks) => ({
  type: READ_TASKS,
  payload: tasks,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});