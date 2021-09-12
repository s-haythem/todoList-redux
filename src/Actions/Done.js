import {Done} from './ActionTypes'

const DoneHandler = (id) => {
    return {
        type : Done,
        payload : id
    
    }
}

export default DoneHandler