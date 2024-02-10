//this is node js / common js code
//so need to use require() syntax for imports
const { createStore, applyMiddleware } = require("redux");
const {
	delayActionMiddleware,
	fetchAsyncMiddleware,
} = require("./middlewares");
const { fetchTodos } = require("./functions");
const {thunk} = require("redux-thunk");

const initialState = {
	todos: [],
};

//reducer
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todos/todoAdded":
			return {
				...state,
				todos: [
					...state.todos,
					{
						title: action.payload,
					},
				],
			};

		case "todos/todoLoaded":
			return {
				...state,
				todos: [...state.todos, ...action.payload],
			};

		default:
			return state;
	}
};

//store
//using 'redux thunk middleware' to handle async tasks which will be passed as function body instead of action and after the async task is done then the real action will be called from that async function

const store = createStore(todoReducer, applyMiddleware(thunk));

//subscribe to state change so that components get updated with state change
store.subscribe(() => {
	console.log(store.getState());
});

//dispatch action
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "learn react from lws"
// })

//dispatching a fake action from where the "todos/todoLoaded" will be dispatched
// store.dispatch({
//     type: "todos/fetchTodos"
// })

//redux async thunk function: an alternative of action passing
store.dispatch(fetchTodos);

//so here 'thunk' middleware is doing the works in behind. it is taking the fetchTodos function and calling that function by passing 'dispatch' and 'getState' too.



module.exports = store