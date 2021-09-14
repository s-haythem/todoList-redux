import {Filter, FilteredTodos} from './ActionTypes'

export const Filtering =(status)=>{
    return {
        type: Filter,
        payload:{status}

    }
}

export const FilterHandler =()=>{
          return {
              type: FilteredTodos
           
          }
      }