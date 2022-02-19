
export const initState = {
isLoading:false
}
export const loadingReducer = (state = initState, action: loadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state,isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingACType = {
    type:'LOADING'
    isLoading:boolean
}

export const loadingAC = (isLoading:boolean): loadingACType => {
    return{
        type:'LOADING',isLoading
    }as const
} // fix any