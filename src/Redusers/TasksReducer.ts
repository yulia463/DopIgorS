import {v1} from "uuid";

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type InitialType = {
    [key: string]: TaskType[]
}

let initialState: InitialType = {

    ['todolistID1']: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
    ['todolistID2']: [
        {id: v1(), title: "HTML&CSS2", isDone: true},
        {id: v1(), title: "JS2", isDone: true},
        {id: v1(), title: "ReactJS2", isDone: false},
        {id: v1(), title: "Rest API2", isDone: false},
        {id: v1(), title: "GraphQL2", isDone: false},
    ]

}
export const TasksReducer = (state = initialState, action: addTaskACType): InitialType => {
    switch (action.type) {
        case 'ADD-TASK': {
            return {...state, [action.payload.todolistId]: [action.newTask, ...state[action.payload.todolistId]]}
        }
        default :
            return state
    }
}

type addTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (todolistId: string) => {
    return {
        type: 'ADD-TASK',
        newTask: {
            id: v1(),
            title: "newTask",
            isDone: false
        },
        payload: {
            todolistId
        }
    } as const
}
