import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if(editTaskId !== null){
      setToDoList(toDoList.map((task)=>{
        if(task.id === editTaskId){
          return {...task, taskName: newTask}
          }
          return task
      }))
      setEditTaskId(null)
      setNewTask("")
      
    }else{
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
    setNewTask(""); 
  }
};

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };



  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const updateTask =(id,taskName)=>{
    setEditTaskId(id)
    setNewTask(taskName)

  }

 
  return (
    <div className="App">
    <h1 className="heading">My To Do List </h1>
      <div className="addTask">
        <input  className="task-input" id="#task" value={newTask} onChange={handleInputChange} />
        <button className="addButton" onClick={addTask}>{editTaskId ?"Save" : "Add"}</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
              editTask={updateTask}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
