const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");


const initialState = {
    count: 0,
}


const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers : {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= action.payload
        },
    },
    //develop a functionality so that when 'increment' action of counter feature is dispatched, along with 'increment reducer function' of counter , this event should also be reacted by the 'dynamic counter' component's reducer function
    //so for that 'extraReducers' property was introduced 

    //method 1
    /*
    extraReducers: {
        ["counter/increment"] : (state, action) => {
            state.count += 1
        }
    },

    */

    //method 2
    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
            state.count += 1
        } )
    }

})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamicCounterActions = dynamicCounterSlice.actions