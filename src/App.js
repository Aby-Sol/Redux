import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './reducers';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'; 

const store = createStore(tasksReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <div class="heading">
    <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>
    <h1 class="heading__title">My To-Do List</h1>
  </div>
    <div>
      <label class="form__label" for="todo">~ Today I need to ~</label>
    </div>
        <div className="add-task-container">
          <AddTask />
        </div>
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;