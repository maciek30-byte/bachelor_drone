import { Dashboard } from '../layout/Dashboard';
import { MissionCreator } from '../components/Forms/CreateMission/CreateMissionForm';
import { MissionList } from '../components/MissionList/MissionList';
import { NotificationCenter } from '../components/NotificationCenter/NotificationCenter';
export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/missions/create",
    element: <MissionCreator />,
  },
  {
    path: "/missions",
    element: <MissionList />,
  },
  {
    path: "/notifications",
    element: <NotificationCenter />,
  }
];