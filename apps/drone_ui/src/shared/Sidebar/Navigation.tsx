import { NavLink } from 'react-router-dom';
import { SidebarRoutes } from './SideBarRoutes';
export const Navigation = () => {
    return (
        <div className="flex-1">
            <p className="font-bold mb-4 text-ai-green">Navigation</p>
            <ul>
                {SidebarRoutes.map((route) => (
                    <li key={route.path} className="mb-2">
                        <NavLink
                            to={route.path}
                            className={({ isActive, isPending }) =>
                                `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-ai-green/20 text-ai-green'
                                        : isPending
                                        ? 'text-ai-text/70'
                                        : 'text-ai-text hover:text-ai-green hover:bg-ai-green/10'
                                }`
                            }
                        >
                            {route.icon}
                            <span>{route.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};