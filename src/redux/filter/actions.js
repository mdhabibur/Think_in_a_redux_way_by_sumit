import { FILTER_BY_COLOR, FILTER_BY_STATUS } from "./actionTypes"

export const statusChanged = (status) => {
    return {
        type: FILTER_BY_STATUS,
        payload: status,
    }

}


export const filterByColor = (color, toggleType) => {
    return {
        type: FILTER_BY_COLOR,
        payload: {
            color: color,
            toggleType: toggleType
        }
    }
}