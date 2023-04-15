type InitialType ={
    id: string,
    title: string,
    filter: string
}

let initialState:InitialType[]=[
    {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]

export const TodoListRedusers = (state=initialState,action:any):InitialType[]=>{
    switch (action.type){
        case ' XX':{
            return state
        }
        default :return state
    }
}

