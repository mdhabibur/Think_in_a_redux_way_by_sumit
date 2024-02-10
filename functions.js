const fetch = require('node-fetch')

const fetchTodos = async (dispatch, getState) => {
    //fetch the todos from api
    const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();

    dispatch({
    type: "todos/todoLoaded",
    payload: todos,
    });

    console.log(`number of updated todos: ${getState().todos.length}`);
}

module.exports = {fetchTodos}