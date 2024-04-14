export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
  });
  
  export const editTask = (task) => ({
    type: 'EDIT_TASK',
    payload: task
  });
  
  export const toggleTaskStatus = (taskId) => ({
    type: 'TOGGLE_TASK_STATUS',
    payload: taskId
  });
  