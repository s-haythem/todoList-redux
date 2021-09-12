import {Edit} from './ActionTypes'

const EditHandler = (id, textInput) => {
    return {
        type : Edit,
        payload : {id, textInput}
        
    }
}

export default EditHandler