import {Delete} from './ActionTypes'

const DeleteHandler = (id) => {
    return {
        type : Delete,
        payload : id
        
    }
}

export default DeleteHandler