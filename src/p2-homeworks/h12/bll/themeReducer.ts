export type ThemeInitState = {
    themes: string
}

const initState = { themes: 'some'};

export const themeReducer = (state: ThemeInitState = initState, action: ThemeActionTotalType): ThemeInitState => { // fix any
    switch (action.type) {
        case 'DARK':
            return {themes: 'dark'}
        case 'RED':
            return {themes: 'red'}
        case 'SOME':
            return {themes: 'some'}

        default:
            return state;
    }
};
export type ThemeActionTotalType = SetDarkThemeActionType | SetRedThemeActionType | SetSomeThemeActionType

type SetDarkThemeActionType = ReturnType<typeof darkAc>

type SetRedThemeActionType = ReturnType<typeof redAc>

type SetSomeThemeActionType = ReturnType<typeof someAc>

export const darkAc =  ()=> {
    return{
        type: 'DARK'
    }as const
}
export const redAc =  ()=> {
    return{
        type: 'RED'
    }as const
}
export const someAc =  ()=> {
    return{
        type: 'SOME'
    }as const
}