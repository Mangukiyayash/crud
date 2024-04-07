import { CREATE_TASK, READ_TASKS, UPDATE_TASK, DELETE_TASK } from '../Actions/Action';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case READ_TASKS:
      return { ...state, tasks: action.payload };
    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, tasks: updatedTasks };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: filteredTasks };
    default:
      return state;
  }
};

export default reducer;