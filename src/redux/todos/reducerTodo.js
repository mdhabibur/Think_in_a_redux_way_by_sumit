import { ADD_TODO, CLEAR_COMPLETED, COLOR_SELECTED, COMPLETE_ALL_TODOS, DELETE_TODO, TOGGLE_COMPLETED } from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (state) => {
	const nextId = state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return nextId + 1
};

const reducerTodo = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: nextTodoId(state),
					todoText: action.payload,
					completed: false,
				},
			];

		case TOGGLE_COMPLETED:
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
			});


        case COLOR_SELECTED:
            return state.map((todo) => {
                if(todo.id !== action.payload.id){
                    return todo

                }
                return {
                    ...todo,
                    color: action.payload.color
                }

            })

        case DELETE_TODO:
                return state.filter((todo) => todo.id !== action.payload)

        case COMPLETE_ALL_TODOS:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                }
            })   
            
        case CLEAR_COMPLETED:
            return state.filter((todo) => !todo.completed)

		default:
			return state;
	}
};

export default reducerTodo;
