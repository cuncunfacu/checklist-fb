import React from 'react';
import { useParams } from 'react-router-dom'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';


const ChecklistComplete: React.FC = () => {
    const { checklistId } = useParams()

    const checklist = useSelector((state: RootState) =>
        state.checklists.find(checklist => checklist.id === checklistId)
    )
    if (!checklist) {
        return <p>Checklist not found!</p>
    }
    return (
        <div className="container container-fluid">
            <div className="col">
                <div className="row">
                    <h2>{checklist.name}</h2>
                </div>
                <div className="row">
                    <form>
                        {checklist.tasks.map((task) => {
                            return (
                                <div className="form-check" key={task.id}>
                                    <input type="checkbox" className="form-check-input" id={"check-"+task.id}/>
                                    <label className="form-check-label" htmlFor={"check-"+task.id}>{task.content}</label>
                                </div>
                            )
                        }
                        )}
                        <button className="btn btn-primary" type="button">Complete!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChecklistComplete;