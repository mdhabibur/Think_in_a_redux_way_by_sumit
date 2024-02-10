import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByColor, statusChanged } from '../redux/filter/actions'

const Footer = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
    const status = useSelector((state) => state.filter.status)
    const colors = useSelector((state) => state.filter.colors)

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status))

    }

    const noOfTasksLeft = () => {
        return todos.filter((todo) => !todo.completed).length
    }

    const tasksLeftToComplete = (tasksLeft) => {
        switch (tasksLeft) {
            case 0:
                return " no tasks"

            case 1:
                return 1 + " task"

            default:
                return tasksLeft + " tasks" 

        }

    }


    const filterByColorHandler = (color) => {
        if(colors.includes(color)){
            dispatch(filterByColor(color, "removeToggle"))
        }else {
            dispatch(filterByColor(color, "addToggle"))
        }

    }

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">

    <p> {tasksLeftToComplete(noOfTasksLeft())} left</p>
    <ul className="flex space-x-1 items-center text-xs">

        <li className={`cursor-pointer ${status === "All" && "font-bold"} `}
        onClick={() => handleStatusChange("All")}
        >All</li>

        <li>|</li>

        <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"} `}
        onClick={() => handleStatusChange("Incomplete")}
        >Incomplete</li>

        <li>|</li>

        <li className={`cursor-pointer ${status === "Complete" && "font-bold"} `}
        onClick={() => handleStatusChange("Complete")}
        >Complete</li>


        <li></li>
        <li></li>
        <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`}
            onClick={() => filterByColorHandler("green")}
        ></li>
        <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
            onClick={() => filterByColorHandler("red")}
        ></li>
        <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}
            onClick={() => filterByColorHandler("yellow")}
        ></li>
    </ul>
</div>
  )
}

export default Footer