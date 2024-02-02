import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";


//as createStore() method can take only one reducer function
const store = createStore(rootReducer)

export default store