import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../redux/actions/actions';
import './AddTask.css'

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        description: taskDescription,
        isDone: false
      };
      dispatch(addTask(newTask));
      setTaskDescription('');
    }
  };

  return (
  
    <div class="form">
      <input class="form__input"
           type="text" 
           id="todo" 
           name="to-do"
           size="30"
           value={taskDescription}
           onChange={(e) => setTaskDescription(e.target.value)}
           required/>
      <button class="button" onClick={handleAddTask}><span>Submit</span></button>
    </div>
  );
};

export default AddTask;