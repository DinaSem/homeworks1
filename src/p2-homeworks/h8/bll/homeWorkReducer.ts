import { initialStateType} from "../HW8";

export const homeWorkReducer = (state: Array<initialStateType>, action: GeneralType) => { // need to fix any
    switch (action.type) {
        case 'sort': {
                return [...state.sort()]
            }

        case 'sortd': {
            return [...state.reverse()]
                }

        case 'check': {
                return [...state.filter(m=>m.age>18)]
        }
        default: return state
    }
}
type GeneralType= sortUpACType|checkACType|sortDownACType
type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type checkACType = ReturnType<typeof checkAC>
export const sortUpAC = () => {
  return{
      type:'sort',
      payload: 'up',

  }as const
}
export const sortDownAC = () => {
    return{
        type:'sortd',
        payload: 'down',
    }as const
}
export const checkAC = () => {
    return{
        type:'check',
        payload: '18',
    }as const
}