import React from "react";
import {useAppSelector} from "./hooks/hooks";
import {TsarButton} from "./components /TsarButton";
import {useDispatch} from "react-redux";
import {addTaskAC} from "./Redusers/TasksReducer";

type PropsType = {
    todolistId: string
    title: string
    filter: string
}
export const Todos: React.FC<PropsType> = (props) => {

    const {todolistId, title, filter} = props
    const tasks = useAppSelector(state => state.tasks[todolistId])
    const dispatch = useDispatch()

    const currentTasks =
        tasks.map(el => {
            return (
                <li key={el.id}>
                    <span>{el.id}</span>
                    <span>-{el.title}-</span>
                    <input type={"checkbox"} checked={el.isDone}/>
                </li>
            )
        })

    const addTaskHandler = () => {
        dispatch(addTaskAC(todolistId))
    }

    return (
        <div>
            <h3>{title}</h3>
            <TsarButton name={'add Task'} callback={addTaskHandler}/>
            {currentTasks}
        </div>
    )
}