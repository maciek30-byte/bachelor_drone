import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../layout/BasedLayout';
import { CreateMissionPage } from '../pages/CreateMissionPage';
import { DashboardPage } from '../pages/DashboardPage';
import { NotificationsListPage } from '../pages/NotificationsListPage';

export function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/missions/create" element={<CreateMissionPage />} />
        <Route path="/notifications" element={<NotificationsListPage />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
