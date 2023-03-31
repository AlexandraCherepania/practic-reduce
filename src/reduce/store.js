// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "../reduce/tasksSlice";
import { filtersReducer } from "../reduce/filterSlice";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
