import {combineReducers} from 'redux'
import reducerTodo from './todos/reducerTodo'
import reducerFilter from './filter/reducerFilter'

const rootReducer = combineReducers({
    todo: reducerTodo,
    filter: reducerFilter,
})

export default rootReducer