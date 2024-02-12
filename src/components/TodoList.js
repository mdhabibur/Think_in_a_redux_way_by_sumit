import React, { useEffect } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import initialState from "../redux/filter/initialState";
import uploadTodo from "../redux/todos/thunk/uploadTodo";

export default function TodoList () {

	const todos = useSelector((state) => state.todo);
  const status = useSelector((state) => state.filter.status)
  const colors = useSelector((state) => state.filter.colors)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchTodos)
  }, [dispatch, uploadTodo])
  
  

  const filterByStatus = (todo) => {
    switch(status) {
      case "Complete":
        return todo.completed
        //means filter those todo object whose 'completed' property is true when clicked to 'Complete'

      case "Incomplete":
        return !todo.completed
        //means filter those todo object whose 'completed' property is false when clicked to 'Incomplete'

      default:
        return todo

    }
  }

  const filterbyColor = (todo) => {
    if(colors.length > 0){
      return colors.includes(todo?.color)
      //means filter or return those todo objects which has the 'color' property that matches the user selected given filter color
    }
    return true
  }

	return (
		<div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">

			{/* <!-- todo --> */}      
			{todos
      .filter(filterByStatus)
      .filter(filterbyColor)
      .map((todo) => {
				return <Todo todo={todo} key={todo.id} />;
			})}

		</div>
	);
};



