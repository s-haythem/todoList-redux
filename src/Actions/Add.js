import {Add} from './ActionTypes'

const AddHandler = (id) => {
    return {
        type : Add,
        payload : id
        
    }
}

export default AddHandler