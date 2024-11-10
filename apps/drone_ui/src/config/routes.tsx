import { Dashboard } from '../layout/Dashboard';
import { CreateMissionForm } from '../components/Forms/CreateMission/CreateMissionForm';
import { MissionList } from '../Features/Mission/MissionList';
import { NotificationsList } from '../Features/Notifications/NotificationsList';
export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/missions/create",
    element: <CreateMissionForm />,
  },
  {
    path: "/missions",
    element: <MissionList />,
  },
  {
    path: "/notifications",
    element: <NotificationsList />,
  }
];