import { colorSelected } from "../actions"

const updateColor = (id, color) => {
    return async (dispatch, getState) => {

        const response = await fetch(`http://localhost:9000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                color: color,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

        const todo = await response.json()
        dispatch(colorSelected(todo.id, todo.color))

    }

}

export default updateColor