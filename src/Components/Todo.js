import { useDispatch } from "react-redux";
import DeleteHandler from "../Actions/Delete"
import DoneHandler from '../Actions/Done'
import EditTodo from "./EditTodo";

const Todo = ({todo}) => {
    const dispatch=useDispatch()
    return (
        <div className='todo'>
            <h5
      style={ todo.isDone ? {textDecoration:'line-through'}:{}   }
      >{todo.text}</h5>
      <div className='btns'>
        <button onClick={()=>{ dispatch(DoneHandler(todo.id)) }} >Done</button>
        <button onClick={()=>dispatch(DeleteHandler(todo.id)) }  >Del</button>
        <button><EditTodo todo={todo}/></button>
      </div>
        </div>
    )
}

export default Todo;