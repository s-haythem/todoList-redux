
import { useDispatch } from "react-redux";
import { Filtering } from "../Actions/Filtering";



const Filters = () => {
    const dispatch = useDispatch()

    const statusHandler=(e)=>{
        dispatch (Filtering(e.target.value))}

    
    
    return (
        <div className='todos-filter'>
            <select onChange={statusHandler} name='todos' className='filter-select'>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
            
        </div>
    )
}

export default Filters