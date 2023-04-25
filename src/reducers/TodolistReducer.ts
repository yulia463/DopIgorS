import {useState} from "react";
import {Dispatch} from "redux";
import {todolistApi, TodolistType} from "../Api/todolistApi";

type SumType = TodolistType &{
    filter: string
}

// type InitialType = {
//     id: string,
//     title: string,
//     filter: string
// }

let initialState: SumType[] = [
    // {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    // {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]


export const TodolistReducer = (state = initialState, action: tsarlTypeAC): SumType[] => {
    switch (action.type) {
        case "GET-TODOS": {
            return action.payload.todos.map((el) => ({ ...el, filter: 'all' }))
        }
        default:
            return state
    }
}

type tsarlTypeAC = getTodolistACType

type getTodolistACType = ReturnType<typeof getTodolistAC>

const getTodolistAC = (todos: TodolistType[]) => {
    return {
        type: "GET-TODOS",
        payload:{
            todos
        }
    } as const
}

export const getTodolistsTC = () => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.getTodolists()
        dispatch(getTodolistAC(result.data))


    } catch (e) {
        console.log(e)
    }
}

