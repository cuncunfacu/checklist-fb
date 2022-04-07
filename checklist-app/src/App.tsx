import React from 'react';
import { Routes, Route} from "react-router-dom";

import Checklists from './features/checklist/Checklists';
import ChecklistComplete from './features/checklist/ChecklistComplete';
import NewChecklist from './features/checklist/NewChecklist';
const App: React.FC = () => {
  return (
    <div className="container container-fluid">
      <Routes>
        <Route path="/" element={<Checklists />} />
        <Route path="/complete/:checklistId" element={<ChecklistComplete />} />
        <Route path="/new" element={<NewChecklist />} />
      </Routes>
    </div>
  );
}

export default App;
