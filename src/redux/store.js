import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";


/*
//Redux middleware
//Redux middleware uses the concept of 'carried function' which takes only one argument and returns another function 
ex:

function multiply(a,b,c){
    return a*b*c;
}

console.log(multiply(1,2,3)) => prints : 6

using 'carried function' :
function carriedMultiply(a){
    return function (b) {
        return function (c) {
            return a*b*c;
        }
    }
}

console.log(carriedMultiply(1)(2)(3)) => also prints: 6


redux middleware also uses this 'carried functions' concept

and in which step this middlewares work?

when an 'action/command' is dispatched by user, it will go to the 'reducer function' in the 'store' object where the redux will call the 'reducer function' passing the 'state' and 'action' in it's parameter.

so if we want to access and manipulate the 'actions' dispatched by the user, before going to 'reducer function' in the store object, we will user do it using 'middleware' before the action is passed to 'reducer ' function.

this is the work of middleware 

so middleware catches the 'action' before it is passed to 'reducer function' to change to corresponding state.


*/


//as createStore() method can take only one reducer function
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)))


export default store