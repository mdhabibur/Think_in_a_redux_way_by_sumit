const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require('../features/counter/counterSlice')
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice")


//this store file should be in root location so that all features can share it as global store point

//configuring store and passing different reducers for different features
const store = configureStore({
    reducer:{
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
    }
})

module.exports = store