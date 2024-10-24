import React, { useState } from 'react';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative h-full">
            {/* Sidebar */}
            <div
                className={`bg-base-200 h-full p-4 flex flex-col justify-between fixed top-0 left-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'
                    }`}
            >
                <div>
                    {/* Navigation */}
                    <p className="font-bold mb-4 text-base-content">Navigation</p>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-primary hover:text-primary-focus">Dashboard</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-primary hover:text-primary-focus">Drones Management</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-primary hover:text-primary-focus">Mission History</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-primary hover:text-primary-focus">Statistics</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-primary hover:text-primary-focus">Settings</a>
                        </li>
                    </ul>
                </div>

                {/* User Profile */}
                <div className="border-t mt-4 pt-4">
                    <p className="font-bold text-base-content mb-2">User Profile</p>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Profile"
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-medium text-base-content">John Doe</p>
                            <a href="#" className="text-sm text-primary hover:text-primary-focus">Account Settings</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle button */}
            <button
                onClick={toggleSidebar}
                className={`btn btn-circle btn-primary fixed top-4 transition-all duration-300 z-50 ${isOpen ? 'left-64' : 'left-4'
                    }`}
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
    );
};
