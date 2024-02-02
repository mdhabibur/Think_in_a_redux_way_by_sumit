
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


//so how this mapStateToProps call back function works:
/*
this mapStateToProps call back function is passed to connect() HOC
, inside the connect() api this callback function is called and redux state is passed, and then the call back function returns the 
count property from the 'state' and this 'count' is then passed to our Counter component



*/

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (value) => dispatch(increment(5)),
		decrement: (value) => dispatch(decrement(2)),

	}
}

//so how this works:
/*
similar to mapStateToProps, this mapDispatchToProps call back is called from redux with the "dispatch" argument, and then the 
call back returns the "increment" and "decrement" handler property inside which there is a function body.

so when button will be clicked, this increment will be called,
the function body will return dispatch() function means the dispatch() will be called and inside the dispatch(), the increment() will be called with the value argument

*/



//connect() is a higher order component function (HOC) which takes an original component and returns another component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//here mapStateToProps function is a call back function which will be passed to redux and redux will call it and will pass the 'state' through its argument

//similarly mapDispatchToProps is also a callback function through which redux will pass the 'actions' to us