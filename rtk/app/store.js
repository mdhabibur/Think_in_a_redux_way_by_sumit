const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../../redux/counter/reducer");

//this store file should be in root location so that all features can share it as global store point

//configuring store and passing different reducers for different features
const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

module.exports = store