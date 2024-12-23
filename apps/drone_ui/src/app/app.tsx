import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../layout/BasedLayout';
import { CreateMissionPage } from '../pages/CreateMissionPage';
import { DashboardPage } from '../pages/DashboardPage';
import { NotificationsListPage } from '../pages/NotificationsListPage';
import { MissionList } from '../Features/Mission/MissionList';
import { FormWrapper } from '../Features/Mission/MultiStepMissionForm/FormWrapper';

export function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/missions/create" element={<FormWrapper />} />
        <Route path="/missionsList" element={<MissionList />} />
        <Route path="/notifications" element={<NotificationsListPage />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
