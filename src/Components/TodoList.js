import { useSelector } from "react-redux";

import Todo from "./Todo";



const TodoList = () => {
    const tasks = useSelector(state => state.task)
   
    return (
        <div className='todoList'>
            {tasks.map((el) => (<Todo todo={el} key={el.id}/>))}

        </div>
    )
}

export default TodoList;