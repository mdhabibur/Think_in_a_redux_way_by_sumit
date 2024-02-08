import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state) => state.todo);

	return (
		<div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">

			{/* <!-- todo --> */}
			{todos.map((todo) => {
				return <Todo todo={todo} key={todo.id} />;
			})}

		</div>
	);
};

export default TodoList;
