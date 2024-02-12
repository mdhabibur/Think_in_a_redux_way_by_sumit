import React, { useState } from 'react'
import notes from '../assets/images/notes.png'
import doubleTick from '../assets/images/double-tick.png'
import plusImage from '../assets/images/plus.png'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearCompleted, completeAllTodos } from '../redux/todos/actions'
import uploadTodo from '../redux/todos/thunk/uploadTodo'

const Header = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)

    const [todoText, setTodoText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(uploadTodo(todoText, todos.length+1))
        setTodoText('')
    }

    const handleCompleteAllTodos = () => {
        dispatch(completeAllTodos())

    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted())
    }



  return (
    <div>
    <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
    >
        <img
            src={notes}
            className="w-6 h-6"
            alt="Add todo"
        />
        <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={todoText}
            onChange={(e) => {
                console.log(e.target.value)
                setTodoText(e.target.value)
                }}
        />
        <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
        ></button>
    </form>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
            <img
                className="w-4 h-4"
                src={doubleTick}
                alt="Complete"
            />
            <span
            onClick={() => handleCompleteAllTodos()}
            >Complete All Tasks</span>
        </li>
        <li className="cursor-pointer"
        onClick={() => handleClearCompleted()}
        >Clear completed</li>
    </ul>
</div>
  )
}

export default Header