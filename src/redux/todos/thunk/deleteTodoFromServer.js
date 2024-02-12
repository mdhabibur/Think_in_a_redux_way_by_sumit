import { deleteTodo } from "../actions"

const deleteTodoFromServer = (id) => {
    return async (dispatch, getState) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: "DELETE"
        })

        dispatch(deleteTodo(id))

    }
}

export default deleteTodoFromServer