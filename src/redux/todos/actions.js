import { ADD_TODO, TOGGLE_COMPLETED, COLOR_SELECTED, DELETE_TODO, COMPLETE_ALL_TODOS, CLEAR_COMPLETED, LOADED_TODOS } from "./actionTypes";

export const addTodo = (todoText) => {
	return {
		type: ADD_TODO,
		payload: todoText,
	};
};

export const todosLoaded = (todos) => {
    return {
        type: LOADED_TODOS,
        payload: todos
    }
}

export const toggleCompleted = (todoId) => {
	return {
		type: TOGGLE_COMPLETED,
		payload: todoId,
	};
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLOR_SELECTED,
        payload: {
            id: todoId,
            color: color,
        }
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }


}

export const completeAllTodos = () => {
    return {
        type: COMPLETE_ALL_TODOS
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }

}