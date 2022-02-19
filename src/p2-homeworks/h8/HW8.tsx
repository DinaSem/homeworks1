import React, {useReducer} from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {v1} from "uuid";
import s from './bll/HW8.module.css'

export type initialStateType = {
    _id: string
    name: string
    age: number
}
export type InstructioonsType = {
    type: string
    payload: string
}

const initialState: Array<initialStateType> = [
    {_id: v1(), name: 'Кот', age: 3},
    {_id: v1(), name: 'Александр', age: 66},
    {_id: v1(), name: 'Коля', age: 16},
    {_id: v1(), name: 'Виктор', age: 44},
    {_id: v1(), name: 'Дмитрий', age: 40},
    {_id: v1(), name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useReducer(homeWorkReducer, initialState) // need to fix any
    const finalPeople = people.map((p: any) =>
            <div key={p.key}>
                        <div className={s.div}>
                            <div className={s.span}>{p.name}</div>
                            <div className={s.span}>{p.age}</div>
                        </div>

            </div>
    )

    const sortUp = () => setPeople(sortUpAC())
    const sortDown = () => setPeople(sortDownAC())
    const check = () => setPeople(checkAC())

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div>

                        {finalPeople}

            </div>


            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check}>check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
