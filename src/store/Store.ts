import {combineReducers, createStore} from "redux";
import {TodoListRedusers} from "../Redusers/TodoListRedusers";
import {TasksReducer} from "../Redusers/TasksReducer";

const RootReducer=combineReducers({
    todos:TodoListRedusers,
    tasks:TasksReducer
})

export const store = createStore(RootReducer)
export type RootState=ReturnType<typeof RootReducer>



//@ts-ignore
window.store=store
