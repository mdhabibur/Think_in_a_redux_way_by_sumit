//it is difficult to access 'state' and 'dispatch' from redux using connect() api when using class component, now as redux upgraded so they provide hooks like useSelector() for accessing redux state and useDispatch() to dispatch any actions and hooks will be used with functional component only and also Hooks must be initialized at the top of the functional component to work

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/dynamicCounter/actions";

function DynamicHooksCounter(){

    //using useSelector() hook which takes a callback function to get access to the state 
    const count = useSelector((state) => state.dynamicCounter.value)
    const dispatch = useDispatch()

    const incrementHandler = (value) => {
        dispatch(increment(value))
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value))
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => incrementHandler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrementHandler(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );


}

export default DynamicHooksCounter