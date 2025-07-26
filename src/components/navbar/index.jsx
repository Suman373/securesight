"use client";
import { Bolt, LayoutDashboard, Cctv, TriangleAlert, UsersRound, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';


const navItems = [
    {
        icon: <LayoutDashboard />,
        text: 'Dashboard',
        link: 'dashboard'
    },
    {
        icon: <Cctv />,
        text: 'Cameras',
        link: 'cameras'
    },
    {
        icon: <Bolt />,
        text: 'Scenes',
        link: 'scenes'
    },
    {
        icon: <TriangleAlert />,
        text: 'Incidents',
        link: 'incidents'
    },
    {
        icon: <UsersRound />,
        text: 'Users',
        link: 'users'
    },
]

const Navbar = () => {

    const [chevronUp, setChevronUp] = useState(false);

    return (
        <div className="h-20 w-full sticky top-0 z-50">
            <div className='bg-[#D0A70459]/50 h-full mx-auto absolute -z-10 inset-0 w-[40%]'>

            </div>
            {/* Navbar */}
            <div className="w-full backdrop-blur-3xl border-b border-neutral-500">
                <nav className="flex text-white items-center h-20 justify-between px-8 py-3">
                    {/* Logo */}
                    <h1 className="text-xl font-bold text-amber-300">SecureSight.</h1>

                    {/* Navigation Items */}
                    <ul className="flex gap-8 items-center">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex gap-1 items-center cursor-pointer hover:text-amber-400 transition-colors duration-300"
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* User Section */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908"
                            alt="User avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className='flex items-center gap-1 relative'>
                            <span className='text-sm cursor-pointer'>Suman Roy</span>
                            <span
                                onMouseEnter={() => setChevronUp(true)}
                                onMouseLeave={() => setChevronUp(false)}
                                className='cursor-pointer'>
                                {chevronUp ? <ChevronUp /> : <ChevronDown />
                                }
                                {chevronUp && <div className='top-10 left-[-30%] h-32 w-32 bg-neutral-900 absolute shadow-sm rounded-md shadow-neutral-500'>

                                </div>}
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;