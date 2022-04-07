import React from 'react';
import { Routes, Route} from "react-router-dom";

import NavigationBar from './components/Navigationbar';
import Checklists from './features/checklist/Checklists';
import ChecklistComplete from './features/checklist/ChecklistComplete';
import NewChecklist from './features/checklist/NewChecklist';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="container container-fluid p-4">
        <Routes>
          <Route path="/" element={<Checklists />} />
          <Route path="/complete/:checklistId" element={<ChecklistComplete />} />
          <Route path="/new" element={<NewChecklist />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
