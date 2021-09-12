import {Delete, Add, Done, Edit} from '../Actions/ActionTypes'

const initialState={
    task : [
       
    ]
}
function Reducer (state=initialState, action) {
    switch (action.type) {
        case Delete :
            return {
                ...state,
                task : state.task.filter(el => el.id !== action.payload)
            }
        case Add :
            return {
                ...state,
                task : [...state.task,action.payload]
            }
        case Done :
            return {
                ...state,
                task : state.task.map(el => el.id == action.payload ? {...el, isDone : !el.isDone}:el)
            }
        case Edit :
            return {
                ...state,
                task : state.task.map(el=> el.id==action.payload.id? {...el, text:action.payload.textInput}:el )
            }
        default:return state
        
    }
}

export default Reducer;