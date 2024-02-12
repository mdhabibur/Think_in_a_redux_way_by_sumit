import { addTodo } from "../actions";
import fetchTodos from "./fetchTodos";

const uploadTodo = (todoText,nextTodoSerialId) => {
	return async (dispatch, getState) => {
		const response = await fetch("http://localhost:9000/todos", {
			method: "POST",
			body: JSON.stringify({
				id: nextTodoSerialId.toString(),
				text: todoText,
				completed: false,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const todo = await response.json();

		dispatch(fetchTodos)
		dispatch(addTodo(todo.text));
	};
};

export default uploadTodo;
