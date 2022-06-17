import React, { useState } from 'react';
import User from '../../assets/User';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };
    return (
        <div className="w-1/2 flex items-center justify-end mr-5">
            <button
                onClick={toggleMenu}
                className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <User className=" h-10 w-10 rounded-full" />
            </button>
            {menu && (
                <div
                    className="absolute right-0 mr-4 mt-28 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1">
                    <div className="py-1" role="none">
                        <button
                            type="submit"
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            onClick={handleLogout}
                            id="menu-item-3">
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
