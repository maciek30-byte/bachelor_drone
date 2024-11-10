import { SearchBar } from "./SearchBar";
import { UserWidget } from "./UserWidget";
import { NotificationsList } from "../Features/Notifications/NotificationsList";

const HeaderTittle = () => {
  return (
    <a className="btn btn-ghost text-xl ml-20">
      <span className="text-ai-green font-bold">DRONE</span>
      <span className="text-ai-text">AI</span>
    </a>
  );
};

export const Header = () => {
  return (
    <div className="navbar bg-ai-dark border-b border-ai-light px-4">
      <div className="flex-1 flex items-center">
        <HeaderTittle />
      </div>
      <div className="flex-none gap-4">
        <SearchBar />
        <NotificationsList isWidget={true} />
        <UserWidget />
      </div>
    </div>
  );
};
