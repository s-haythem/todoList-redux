import React , {useState} from 'react'
import AddHandler from '../Actions/Add'
import { useDispatch } from 'react-redux'
import Filters from './Filter'

const AddTodo = () => {
    const [input,setInput] = useState('')
    const dispatch= useDispatch()
    const newTask = () => {
        dispatch(
            AddHandler({
                id : Math.random(), 
                text : input,
                isDone : false,
                edit : false
            })
        )
        setInput('')
    }
    return (
        <div className='addTodo'>
            <input 
                className='textInput'
                type='text'
                placeholder='new task ...'
                id = 'myInput'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='Add-btn' onClick={newTask}>Add</button>
            <Filters/>
        </div>
    )
}

export default AddTodo;