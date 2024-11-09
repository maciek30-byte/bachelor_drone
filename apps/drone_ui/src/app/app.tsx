import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '../layout/BasedLayout';
import { Dashboard } from '../layout/Dashboard';
import { MissionCreator } from '../components/Forms/CreateMission/CreateMissionForm';
import { NotificationCenter } from '../components/NotificationCenter/NotificationCenter';

export function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/missions/create" element={<MissionCreator />} />
        <Route path="/notifications" element={<NotificationCenter isWidget={false} />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
