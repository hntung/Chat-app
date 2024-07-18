import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(state => state?.user)
    return (
        <div className='w-full h-full'>
            <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
                <div>
                    <NavLink className={({ isActive }) => `w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='chat'>
                        <IoChatbubbleEllipses
                            size={20}
                        />
                    </NavLink>

                    <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200  rounded:' title='add friend'>
                        <FaUserPlus
                            size={20}
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='mx-auto' title={user?.name}>
                        <Avatar 
                            width={40}
                            height={40}
                            name={user.name}
                        />
                    </button>
                    <button className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200  rounded:' title='logout'>
                        <span className='-ml-2'>
                            <BiLogOut
                                size={20}
                            />

                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar