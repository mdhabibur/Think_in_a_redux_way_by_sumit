/*
why to use redux took kit (rtk) instead of conventional redux?
because -

1. in conventional redux , there remains lots of boiler plate code
2. different files for different actions and reducer functions, initial state and store and other
3. need other 3rd party packages like redux-thunk etc
4. need to update the state immutably means we can't directly modify the original state rather returns new updated state which is a very difficult tasks and error may happen any time.

for the above reason RTK is introduced for :
1. modularity means features will be slice by slice, for example , all codes, actions, reducer functions, states for counter feature will be in single js file name 'counterSlice.js' 

2. can directly modify the state though in background "immer" package updates the states immutably



*/

const {createSlice} = require('@reduxjs/toolkit')


const initialState = {
    count: 0,
}

//now create the counterSlice object where all codes/states/actions/reducers related to that counter feature will be present

const counterSlice = createSlice({
    name: "counter",
    initialState,
    //different reducers functions for different actions
    reducers: {
        increment: (state, action) => {
            //does not need to return the modified state
            //rather original state can be modified directly 
            //'immer' package will handle the immutable state change in backgound
            state.count++
        },
        decrement: (state, action) => {
            state.count--
        },
    }

})

//need to export the reducers and actions
//and we know in redux store, it accepts only one root reducer 
//so we will export them as single reducer by default export

module.exports = counterSlice.reducer 

//and for actions : named exports
module.exports.counterActions = counterSlice.actions


