import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import {
    decrement as dynamicDecrement,
    increment as dynamicIncrement,
} from "../redux/dynamicCounter/actions";

//this is an example showing when using connect() api for class component in redux for accessing state and dispatch function and how to render different components depending on the passed 'props' of the component which is accessed in this mapStateToProps call back method

function VariableCounter({ count, increment, decrement }) {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    //the passed 'dynamic={true}' props will be received here inside the ownProps property
    //if ownProps.dynamic == true then populate count with the dynamic counter's state value else populate with the static counter's state value

    return {
        count: ownProps.dynamic 
        ? state.dynamicCounter.value
        : state.counter.value
 
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic
            ? (value) => dispatch(dynamicIncrement(5))
            : () => dispatch(increment()),
        decrement: ownProps.dynamic
            ? (value) => dispatch(dynamicDecrement(2))
            : () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
