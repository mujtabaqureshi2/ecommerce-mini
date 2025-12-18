'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState<{ email: string } | null>(null);

    useEffect(() => {
        // Check if user is logged in
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            const userData = localStorage.getItem('user');
            setIsLoggedIn(!!token);
            if (userData) {
                setUser(JSON.parse(userData));
            } else {
                setUser(null);
            }
        };

        checkAuth();

        // Listen for storage events (to sync logout across tabs/windows)
        window.addEventListener('storage', checkAuth);

        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        // Using window.location to ensure all states are cleared
        window.location.href = '/';
    };

    return (
        <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm ">
            <div className="container py-8 mx-auto px-10 max-w-7xl !my-5 mt-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--primary-green)' }}>
                            E-Commerce Store
                        </h1>
                    </Link>

                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-4">
                                <span className="hidden md:inline text-sm text-gray-500">
                                    {user?.email}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2 rounded-full font-semibold border-2 transition-all hover:bg-gray-50 border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-500"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/login">
                                <button className="px-8 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95 bg-green-500 hover:bg-green-600 text-white">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
