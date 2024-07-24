import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, deleteTask, completeTask } from './redux/list-slice';

function App() {
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.list.taskList);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (editTaskId !== null) {
      dispatch(updateTask({ id: editTaskId, name: newTask }));
      setEditTaskId(null);
      setNewTask('');
    } else {
      const newTaskObject = {
        id: taskList.length + 1,
        name: newTask,
        completed: false
      };
      dispatch(addTask(newTaskObject));
      setNewTask('');
    }
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdateTask = (id, name) => {
    setEditTaskId(id);
    setNewTask(name);
  };

  return (
    <div className="App">
      <h1 className="heading">My To Do List</h1>
      <div className="addTask">
        <input
          className="task-input"
          id="task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={handleAddTask}>
          {editTaskId ? "Save" : "Add"}
        </button>
      </div>
      <div className="list">
        {taskList.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.name}
              id={task.id}
              completed={task.completed}
              completeTask={handleCompleteTask}
              deleteTask={handleDeleteTask}
              editTask={handleUpdateTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
