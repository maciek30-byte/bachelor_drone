import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

// Define routes configuration for better maintenance
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    path: '/missions/create',
    name: 'Create Mission',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  }
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <>
            {/* Fixed overlay when sidebar is open */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
                    onClick={toggleSidebar}
                />
            )}
            
            {/* Sidebar container */}
            <div className="fixed inset-y-0 left-0 z-40">
                <div 
                    className={`bg-ai-dark h-full w-64 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full p-4">
                        <div className="flex-1">
                            <p className="font-bold mb-4 text-ai-green">Navigation</p>
                            <ul>
                                {routes.map((route) => (
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

                        {/* User Profile */}
                        <div className="border-t border-ai-light pt-4">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User Profile"
                                    className="rounded-full ring-2 ring-ai-green"
                                    width="40"
                                    height="40"
                                />
                                <div>
                                    <p className="font-medium text-ai-text">John Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggle button */}
                <button
                    onClick={toggleSidebar}
                    className={`fixed top-4 left-4 btn btn-circle btn-primary transform transition-transform duration-300 ${
                        isOpen ? 'translate-x-56' : 'translate-x-0'
                    }`}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
};