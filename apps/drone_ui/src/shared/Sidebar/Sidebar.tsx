import { useState } from "react";
import { useCallback } from "react";
import { SidebarOverlay } from "./SidebarOverlay";
import { SidebarToggle } from "./SidebarToggle";
import { Navigation } from "./Navigation";
import { UserWidget } from "../UserWidget";
export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <>
            <SidebarOverlay isOpen={isOpen} onClose={toggleSidebar} />
            
            <div className="fixed inset-y-0 left-0 z-40">
                <div 
                    className={`bg-ai-dark h-full w-64 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full p-4">
                        <Navigation />
                        <div className="flex items-center gap-2">
                        <UserWidget />
                        <h2>Maciek O</h2>
                        </div>
                        
                    </div>
                </div>

                <SidebarToggle isOpen={isOpen} onClick={toggleSidebar} />
            </div>
        </>
    );
};