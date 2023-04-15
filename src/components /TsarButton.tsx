import React from "react";

type TsarPropsType = {
    name: string
    callback: () => void
}

export const TsarButton: React.FC<TsarPropsType> = (props) => {
    const {name, callback} = props

    const onClickHandler = ()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}