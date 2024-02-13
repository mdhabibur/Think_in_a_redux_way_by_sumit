const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require('../features/counter/counterSlice')
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice")
const postReducer = require("../features/post/postSlice")

const {createLogger} = require("redux-logger")

const logger = createLogger()


//this store file should be in root location so that all features can share it as global store point

//configuring store and passing different reducers for different features
const store = configureStore({
    reducer:{
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        posts: postReducer,
    },
    //adding middlewares in redux toolkit (rtk)
    //in callback function inside middleware, it returns an array of redux default middleware so to add our middleware with these, we call concat() function and pass our middlewares and call them, so when the call back is executed, it returns the the middlewares call
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
})

module.exports = store