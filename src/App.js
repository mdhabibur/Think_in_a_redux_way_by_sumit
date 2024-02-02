import {useState} from "react"
import Counter from "./components/Counter";
import Stats from "./components/Stats";


const initialState = [
  {
    id:1,
    count: 0,
  },
  {
    id:2,
    count:0,
  }
]




export default function App() {

  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total,counter) => total + counter.count,0)
  }

  const increment = (id) => {
    //we will never directly mutate the 'state' object
    //we will use 'immutably state change' technique
    //we will first make a clone of state, change where necessary and then return
    //updated state that will replace the previous state

    const updatedState = state.map((c) => {

      if(c.id === id){
        return {
          ...c,
          count: c.count + 1,
        }

      }

      return {...c}

    })

    setState(updatedState)
    /*

    map() function calls all counter objects one by one, checks if the 'passed id'
    matches any counter object's is, if matches then first makes a copy of the counter object then updates the 'count' property and at last returns the 
    'updated counter' object to the new 'updatedState' array.

    if condition does not match, it still makes a copy of that original counter
    object and returns it to the new array.

    so the 'previous state' of the counter arrays , are totally replaced by the
    'new updated state' of the new arrays of the counter objects.

    
    */




  }


  const decrement = (id) => {

    const updatedState = state.map((c) => {
      if(c.id === id){
        return {
          ...c,
          count : c.count - 1
        }
      }
      return {...c}

    })

    setState(updatedState)

  }


	return (

		<div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
			<h1 class="max-w-md mx-auto text-center text-2xl font-bold">
				Simple Counter Application
			</h1>

      <div class="max-w-md mx-auto mt-10 space-y-5">

        {state.map((count) => <Counter
              key={count.id}
              id={count.id}
              count={count.count}
              increment={increment}
              decrement={decrement}
              /> )}

       <Stats count={totalCount()} />

      </div>
      


		</div>
	);
}

