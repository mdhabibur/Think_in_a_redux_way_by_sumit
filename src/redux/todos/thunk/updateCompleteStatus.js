import { toggleCompleted } from "../actions"


const updateCompleteStatus = (id, completeStatus) => {
    return async (dispatch, getState) => {

        const response = await fetch(`http://localhost:9000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !completeStatus,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

        const todo = await response.json()
        dispatch(toggleCompleted(todo.id))

    }

}

export default updateCompleteStatus