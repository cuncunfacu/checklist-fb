import React from 'react';
import { Link } from 'react-router-dom'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import TimesCompleted from './TimesCompleted';
const Checklists: React.FC = () => {

    const checklists = useSelector((state: RootState) => state.checklists)

    return (
        <div className="col">
            <div className="row">
                {checklists.map((checklist) => {
                    return (
                        <div className="col-lg-6" key={checklist.id}>
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <h3>{checklist.name}</h3>
                                    <p>
                                        <TimesCompleted completedTimes={checklist.completedTimes} />
                                    </p>
                                    <Link to={'/complete/' + checklist.id} className="btn btn-primary">View checklist</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                <div className="card mb-4">
                    <div className="card-body text-center">
                        <Link to="/new" className="btn btn-success">New checklist</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checklists;