import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

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
            
            {/* Sidebar container - always present but transformed */}
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
                                <li className="mb-2">
                                    <Link to="/" className="text-ai-text hover:text-ai-green transition-colors">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/missions/create" className="text-ai-text hover:text-ai-green transition-colors">
                                        Create Mission
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/notifications" className="text-ai-text hover:text-ai-green transition-colors">
                                        Notifications
                                    </Link>
                                </li>
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

                {/* Toggle button - fixed position relative to viewport */}
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