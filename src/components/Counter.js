
//using connect() api to access redux store and access state and actions when using react class components 

import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

function Counter({count, increment, decrement}) {
	return (
		<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">

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
	console.log(ownProps)
	//this functions call also take the own props of Counter 
	return {
		count: state.value,
		//here we are getting the state from redux
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (value) => dispatch(increment(5)),
		decrement: (value) => dispatch(decrement(2)),


	}
}



//connect() is a higher order component function (HOC) which takes an original component and returns another component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//here mapStateToProps function is a call back function which will be passed to redux and redux will call it and will pass the 'state' through its argument

//similarly mapDispatchToProps is also a callback function through which redux will pass the 'actions' to us