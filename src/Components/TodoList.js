import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterHandler } from "../Actions/Filtering";
import Todo from "./Todo";



const TodoList = () => {
    const dispatch=useDispatch()
    const tasks = useSelector(state => state.task)
    const filteredTodos=useSelector(state=>state.filteredTodos) 
    const filter=useSelector(state=>state.filter)

    useEffect(()=>{
        dispatch(FilterHandler())
  },[filter,tasks])

   
   
    return (
        <div className='todoList'>
            {filteredTodos.map((el) => (<Todo todo={el} key={el.id}/>))}

        </div>
    )
}

export default TodoList;