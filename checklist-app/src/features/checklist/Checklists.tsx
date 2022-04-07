import React from 'react';
import { Link } from 'react-router-dom'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
const Checklists: React.FC = () => {

    const checklists = useSelector((state: RootState) => state.checklists)

    return (
        <div className="row">
            {checklists.map((checklist) => {
                return (
                    <div className="col-lg-3" key={checklist.id}>
                        <div className="card">
                            <div className="card-body text-center">
                                <h3>{checklist.name}</h3>
                                <p>Completed times: XX</p>
                                <Link to={'/complete/' + checklist.id} className="btn btn-primary">Complete</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="col-lg-3 d-flex justify-content-center align-items-center">
                <Link to="/new" className="btn btn-success">New checklist</Link>
            </div>
        </div>
    )
}

export default Checklists;