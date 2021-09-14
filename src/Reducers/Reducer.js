import {Delete, Add, Done, Edit, Filter, FilteredTodos} from '../Actions/ActionTypes'

const initialState={
    task : [],
    filter : 'All',
    filteredTodos : []
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
        case Filter :
            return {
                ...state,
                filter:action.payload.status
            }
        case FilteredTodos :
            return {
                ...state,
                filteredTodos:  state.filter==="Completed"? state.task.filter(el=>el.isDone===true):
                                state.filter==="Uncompleted"? state.task.filter(el=>el.isDone===false):
                                state.filter==="All"? state.task:
                                null
            }
        default:return state
        
    }
}

export default Reducer;