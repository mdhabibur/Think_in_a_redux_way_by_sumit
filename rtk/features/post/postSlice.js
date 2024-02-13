

//url:"https://jsonplaceholder.typicodes.com/posts?_limit=5"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

/*
we will perform async task using redux tool kit 
for these async task 'fake action' needs to be dispatched which will be caught by 'thunk middleware of redux' and this thunk middleware will perform the background task and then dispatch the 'actual tasks' which will be handled by the reducer functions and update corresponding states

the advantages over the conventional redux thunk is:
here no need to pass the 'thunk middleware' in the 'middleware property' of the store as rtk will by default apply this middleware on behind

no need to manually dispatch loading,fulfilled and rejected actions as the async task handled by default redux thunk will return a promise and this promise will have these 3 actions

and inside the extraReducers, we can access these 3 actions and dispatch these 3 actions and modify the state correspondingly


*/

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

//need to create the async thunk function which will dispatch the 'fake action to fetchPosts'

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const posts = await response.json()
    return posts
    //this 'posts' is a promise which will have 3 states: pending, fulfilled and rejected and so we will use these 3 states to dispatch 3 actions inside the extraReducers
})


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
            state.posts = []
            state.error = ""
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ""
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }


})


module.exports = postSlice.reducer
module.exports.fetchPosts = fetchPosts