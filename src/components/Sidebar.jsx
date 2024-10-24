import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="drawer lg:drawer-open">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
                checked={isOpen}
                onChange={toggleSidebar}
            />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Zawartość strony */}
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Otwórz menu
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Zawartość sidebara */}
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/products">Produkty</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    );
};
