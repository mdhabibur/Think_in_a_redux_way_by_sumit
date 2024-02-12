import { LOADED_TODOS } from "../actionTypes"
import { todosLoaded } from "../actions"


const fetchTodos = async (dispatch, getState) => {

   const response =  await fetch("http://localhost:9000/todos")
   const todos = await response.json()

   dispatch(todosLoaded(todos))

}

export default fetchTodos