import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

import { checklistAdded} from './checklistsSlice';

interface Task { 
    id: string
    content: string
}
const NewChecklist: React.FC = () => {

    const [checklistName, setChecklistName] = useState('')
    const [ newTask, setNewTask ] = useState('')
    const [ tasks, setTasks ] = useState<Task[] | null>(null)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (newTask) {
            if (tasks) {
                setTasks([...tasks, {id: nanoid(), content: newTask}])
            } else {
                setTasks([{id: nanoid(), content: newTask}])
            }
            setNewTask('')
        }
    }

    const handleRmvTask = (taskIdx: number) => {
        if (tasks) {
            setTasks(tasks.filter((_,index) => { return taskIdx !== index}))
        }
    }

    const handleCreateChecklist = () => {
        dispatch(checklistAdded({
            id: nanoid(),
            completedTimes: 0,
            name: checklistName,
            tasks: tasks
        }))
        navigate('/')
    }

    return(
        <div className="row d-flex justify-content-center">
            <h1 className="text-center">Create new Checklist</h1>
            <form className="col-lg-4">
                <div className="form-group">
                    <label htmlFor="checklist-name">Checklist Name</label>
                    <input type="text" className="form-control" value={checklistName} onChange={(e) => setChecklistName(e.target.value)}/>
                </div>
                <h2 className="text-center mt-4">Tasks</h2>

                { tasks ? tasks.map((task, index) => {
                    return(
                        <div className="input-group mt-4" key={ task.id }>
                            <input type="text" className="form-control" value={ task.content } disabled/>
                            <button type="button" className="btn btn-danger" onClick={() => {handleRmvTask(index)}}>Remove</button>
                        </div>)
                }): ""}

                <div className="input-group mt-4">
                    <input type="text" className="form-control" placeholder="ej: Buy Oranges" value={newTask} onChange={(e) => {setNewTask(e.target.value)}}/>
                    <button type="button" className="btn btn-success" onClick={handleAddTask} disabled={!newTask}>Add Task</button>
                </div>
                <div className="row mt-4 p-4">
                    <button type="button" className="btn btn-success" onClick={handleCreateChecklist} disabled={tasks && tasks.length > 0 && checklistName ? false : true}> Create Checklist</button>
                    <Link to="/" className="btn btn-danger"> Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default NewChecklist;