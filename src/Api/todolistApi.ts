import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '8c1e219f-9ff2-4bd6-a600-b07406352fbd'
    }
})

export const todolistApi = {
    getTodolists(){
        return instance.get<TodolistType[]>('todo-lists')
    }
}

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number

}