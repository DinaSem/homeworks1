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

type SetDarkThemeActionType = {
    type: 'DARK'
}

type SetRedThemeActionType = {
    type: 'RED'
}

type SetSomeThemeActionType = {
    type: 'SOME'
}