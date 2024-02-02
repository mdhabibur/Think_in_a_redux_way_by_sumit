import {useState} from "react"
import Counter from "./components/Counter";
import store from "./redux/store";
import { Provider } from "react-redux";
import HooksCounter from "./components/HooksCounter";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import VariableCounter from "./components/VariableCounter";


//need to wrap the root 'App' component with Provider from redux so that whole application can access the redux state


export default function App(){
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">

        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
            <HooksCounter />
            <DynamicHooksCounter />
            <VariableCounter />
            <VariableCounter dynamic />
        </div>
     </div>

    </Provider>
  )
}