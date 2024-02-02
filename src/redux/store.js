import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";


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


const myLogger = (store) => (next) => (action) => {
    //so this is a 3 steps carried function 
    //and here we can access 'store' object, 'next()', and 'action' object

    //as long as next() function is called, 'action' will not be passed to the 'reducer' function and 'redux' will not be able to call the 'reducer function' to update the state 

    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`previous state: ${JSON.stringify(store.getState())}`)





    //till now though we clicked the 'increment button' the value of the counted is not updated , as redux could not be able to call 'reducer function' as 'action' was not passed to 'reducer function'

    //but if we still want to see the 'upcoming state' we can use array.reduce() method and pass the action to update the state by ourself not by 'redux's reducer function, it is not called yet"

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);


    //now if we pass the action to the reducer function , only then the value of the counter will be updated

    return next(action)






}


//as createStore() method can take only one reducer function
const store = createStore(rootReducer, applyMiddleware(myLogger))



export default store