import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { checklistCompleted, checklistDeleted } from './checklistsSlice';
import  TimesCompleted  from './TimesCompleted';

const ChecklistComplete: React.FC = () => {
    const { checklistId } = useParams()

    const checklist = useSelector((state: RootState) =>
        state.checklists.find(checklist => checklist.id === checklistId)
    )
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ checkedTasks, setCheckedTasks ] = useState(0);
    const [ completeEnabled, setCompleteEnabled ] = useState(false)

    if (!checklist) {
        return <p>Checklist not found!</p>
    }

    const handleComplete = () => {
        dispatch(checklistCompleted({id: checklist.id}))
        navigate('/')
    }

    const handleDelete = () => {
        dispatch(checklistDeleted({id: checklist.id}))
        navigate('/')
    }

    const handleCheckTask = (checked: boolean) => {
        if(checked) {
            const newChTaskLength = checkedTasks+1
            
            setCheckedTasks(newChTaskLength)
            if (newChTaskLength === checklist.tasks.length) {
                setCompleteEnabled(true)
            }
        } else {
            setCompleteEnabled(false)
            setCheckedTasks(checkedTasks-1)
        }
    }


    return (
        <div className="container d-flex justify-content-center">
            <form className='col-lg-6 col-xs-12 p-5 border'>
                <h2 className="text-center">{checklist.name}</h2>
                <TimesCompleted completedTimes={checklist.completedTimes }/>
                {checklist.tasks.map((task) => {
                    return (
                        <div className="form-check mb-3" key={task.id}>
                            <input type="checkbox" className="form-check-input" id={"check-" + task.id} onChange={(e) => handleCheckTask(e.target.checked)}/>
                            <label className="form-check-label" htmlFor={"check-" + task.id}>{task.content}</label>
                        </div>
                    )
                }
                )}
                <div className="row p-3">
                    <button className="btn btn-success" type="button" onClick={handleComplete} disabled={!completeEnabled}>Complete!</button>
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </div>
                <div className="row mt-4 p-3">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>DELETE CHECKLIST</button>
                </div>
            </form>
        </div>
    )
}

export default ChecklistComplete;