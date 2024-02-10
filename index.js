//this is node js / common js code 
//so need to use require() syntax for imports
const {createStore, applyMiddleware} = require('redux')
const { delayActionMiddleware, fetchTodosMiddleware } = require('./middlewares')



const initialState = {
    todos: [],
}


//reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }

                ]
            }

        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload]

            }    

            default:
                return state


    }
}




//store
const store = createStore(
    todoReducer,
    applyMiddleware(delayActionMiddleware, fetchTodosMiddleware))

//subscribe to state change so that components get updated with state change
store.subscribe(() => {
    console.log(store.getState())
})



//dispatch action
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "learn react from lws"
// })

//dispatching a fake action from where the "todos/todoLoaded" will be dispatched
store.dispatch({
    type: "todos/fetchTodos"
})
