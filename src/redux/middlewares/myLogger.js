import rootReducer from "../rootReducer";

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

export default myLogger
