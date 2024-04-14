import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editTask  ,toggleTaskStatus } from '../redux/actions/actions';
import './Task.css'
import './AddTask.css'

const Task = ({ task }) => {
  const [editable, setEditable] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleEditTask = () => {
    dispatch(editTask({ ...task, description: editedDescription }));
    setEditable(false);
    
  };

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  return (

    <div className='flex'>
      <div className='No-flex'>
       <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleStatus}
      />
      {editable ? (
        <input className='updatedTask'
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
        
      )}
      </div>

      <button className="button" onClick={editable ? handleEditTask : handleEditToggle}><span>{editable ? 'Save' : 'Edit'}</span>
        
      </button>
     
    </div>
  );
};

export default Task;