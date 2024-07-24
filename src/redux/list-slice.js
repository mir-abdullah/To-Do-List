import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: { taskList: [] },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, name, completed } = action.payload;
      const task = state.taskList.find(task => task.id === id);
      if (task) {
        task.name = name !== undefined ? name : task.name;
        task.completed = completed !== undefined ? completed : task.completed;
      }
    },
    completeTask: (state, action) => {
        const id =action.payload
        console.log(action.payload)
      const task = state.taskList.find(task => task.id === id);
      if (task) {
        task.completed = true;
      }
    }
  }
});

export const { addTask, deleteTask, updateTask, completeTask } = listSlice.actions;

export default listSlice.reducer;
