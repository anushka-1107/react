import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { updateTodo } from '../features/todo'

const Updatetodo = ({todo , onClose}) => {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const [input, setInput] = React.useState(todo.title)


     const addTodohandler = (e)=>{
            e.preventDefault()
            dispatch(updateTodo(input))
    
            setInput("")
        }

  return (
    <div><input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> </div>
  )
}

export default Updatetodo

/*
<button
             onClick={() => dispatch(updateTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            > <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> 
            <button

            */