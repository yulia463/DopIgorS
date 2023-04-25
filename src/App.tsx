import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {Todos} from "./Todos";
import {todolistApi} from "./Api/todolistApi";
import {getTodolistsTC} from "./reducers/TodolistReducer";


function App() {

    let todos = useAppSelector(state => state.todos)
    //console.log(todos)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // todolistApi.getTodolists()
        //     .then((res) =>
        //         console.log(res.data))

        dispatch(getTodolistsTC())

    }, [])

    return (
        <div className="App">
            {todos.map(el => {
                return (
                    <Todos
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
