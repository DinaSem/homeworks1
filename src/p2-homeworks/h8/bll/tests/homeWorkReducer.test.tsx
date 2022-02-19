import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {initialStateType} from "../../HW8";
import {v1} from "uuid";

let initialState: initialStateType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: v1(), name: 'Кот', age: 3},
        {_id: v1(), name: 'Александр', age: 66},
        {_id: v1(), name: 'Коля', age: 16},
        {_id: v1(), name: 'Виктор', age: 44},
        {_id: v1(), name: 'Дмитрий', age: 40},
        {_id: v1(), name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
   expect(newState[0].name).toBe('Кот')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortd', payload: 'down'})
    expect(newState[5].name).toBe('Кот')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: '18'})
    expect(newState.length).toBe(4);

})
