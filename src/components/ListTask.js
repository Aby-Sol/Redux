import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const [showDone, setShowDone] = useState(true); // State for filtering tasks
  const tasks = useSelector(state => state.tasks);

  const filteredTasks = showDone ? tasks : tasks.filter(task => !task.isDone);

  return (
    <div>
      <h2>Task List</h2>
      <label>
        <input
          type="checkbox"
          checked={showDone}
          onChange={() => setShowDone(!showDone)}
        />
        Show Done Tasks
      </label>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;