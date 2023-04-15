import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppSelector} from "./hooks/hooks";
import {Todos} from "./Todos";


function App() {

    const todos = useAppSelector(state => state.todos)

    return (
        <div className="App">
            {todos.map(el=>{
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
