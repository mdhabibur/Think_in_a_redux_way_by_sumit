const fetch = require('node-fetch')

//async task in javascript/react/redux : same concept of javascript
 const delayActionMiddleware = (store) => (next) => (action) => {

    //before the 'action' goes to reducer function, middleware will catch it and do the necessary works
    if(action.type === "todos/todoAdded"){

        //doing an async task before the action is passed to 'reducer function' for state updating

        console.log("I am delaying the reducer function from state updating")

        //this 'todoAdded' action will be passed to 'reducer function' after 3 sec as due to this 'async web api' 
        //compiler will still go to the 'return' statement after it has passed the setTimeout() to worker thread/web api but the callback function will be executed after 3 sec and the 'action' will be passed to reducer
        setTimeout(() => {
            next(action)
        }, 3000)


        return;

    }

    //for other actions
    return next(action)


}

 const fetchTodosMiddleware = (store) => (next) => async (action) => {
    if(action.type === "todos/fetchTodos"){
        //fetch the todos from api
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        const todos = await response.json()

        store.dispatch({
            type: "todos/todoLoaded",
            payload: todos
        })

        console.log(`number of updated todos: ${store.getState().todos.length}`)



        return;


    }

    return next(action)

}

module.exports = {delayActionMiddleware, fetchTodosMiddleware}