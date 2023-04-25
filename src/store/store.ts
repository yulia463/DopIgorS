import {combineReducers,  legacy_createStore as createStore} from "redux";
import {TodolistReducer} from "../reducers/TodolistReducer";
import {TasksReducer} from "../reducers/TasksReducer";

let RootReducer = combineReducers({
    todos: TodolistReducer,
    tasks: TasksReducer
})

export let store=createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>


