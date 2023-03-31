// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer } from "../reduce/reducer";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
