import { FILTER_BY_COLOR, FILTER_BY_STATUS } from "./actionTypes"
import initialState from "./initialState"


const reducerFilter = (state = initialState, action) => {

    switch(action.type){
        case FILTER_BY_STATUS:
            return {
                ...state,
                status: action.payload,
            }

        case FILTER_BY_COLOR:
            switch(action.payload.toggleType) {
                case "addToggle":
                    return {
                        ...state,
                        colors: [...state.colors, action.payload.color],
                    }

                case "removeToggle":
                    return {
                        ...state,
                        colors: state.colors.filter((existingColor) => existingColor !== action.payload.color)
                    }

                default:
                    return state
            }

        default:
            return state
    }

}

export default reducerFilter