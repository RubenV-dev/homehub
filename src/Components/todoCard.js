import React, {useState} from 'react'

let TodoCard = () => {
    let [state,setState] = useState({
        input: "",
        taskArr: []
    })

    let taskArraytoList = (taskArray) => {
        let taskList = taskArray.map((taskString, i) => {
            return (<li key={i}>
                {taskString}
            </li>)
        })
    
        return taskList
    }

    let handleSubmit = e => {
        e.preventDefault()

        setState({...state,
        taskArr: [...state.taskArr, state.input],
        input: ''
    })
    }

    let handleChange = e => {
        setState({...state, 
          input : e.target.value})
    }

    let liList = !!state.taskArr.length ? taskArraytoList(state.taskArr) : <li>No Tasks Pending</li>


    return (
        <div className="todo-card">
            <h1>
                Todo List
            </h1>
            <form className = "todo-form" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Add a todo"
                name = "text"
                value = {state.input}
                onChange={handleChange}>
                </input>

                <button className="todo-button">Add Task</button>
            </form>
            <ul>
                {liList}
            </ul>
        </div>
    )
}

export default TodoCard