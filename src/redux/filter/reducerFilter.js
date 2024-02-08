

const initialState = {
    id:3,
    todoText: "hello",
    completed:false,
}


const reducerFilter = (state = initialState, action) => {

    switch(action.type){
        case "hello":
            return [
                ...state,
                {
                    id:3,
                    todoText: action.payload,
                    completed:false,
                }

            ]

        default:
            return state
    }

}

export default reducerFilter