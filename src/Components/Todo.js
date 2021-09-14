import { useDispatch } from "react-redux";
import DeleteHandler from "../Actions/Delete"
import DoneHandler from '../Actions/Done'
import EditTodo from "./EditTodo";

const Todo = ({todo}) => {
    const dispatch=useDispatch()
    return (
        <div className='todo'>
            <h4
      style={ todo.isDone ? {textDecoration:'line-through', color:'grey'}:{}   }
      >{todo.text}</h4>
      <div className='btns'>
        <button onClick={()=>{ dispatch(DoneHandler(todo.id)) }} >Done</button>
        <button onClick={()=>dispatch(DeleteHandler(todo.id)) }  >Del</button>
        
      </div>
      <EditTodo todo={todo}/>
        </div>
    )
}

export default Todo;