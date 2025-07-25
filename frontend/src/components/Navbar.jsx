

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";



const Navbar = () => {
 
  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState(false)
  const {token,setToken} = useContext(AppContext)

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b">
      {/* <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" /> */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/dashboard">
          <li className="py-1">DASHBOARD</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/pricing">
          <li className="py-1">PRICING</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token
        ?<div className="flex items-center gap-2 cursor-pointer group relative">
          <img className="w-8 rounded-full " src={assets.profile_pic} alt="" />
          {/* <img className="w-2.5" src={assets.dropdown_icon} alt="" /> */}
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4">
              <p onClick={()=>{navigate("/my-profile")}} className="hover:text-black cursor-pointer">My Profile </p>
             
              <p onClick={()=>setToken('')} className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        : <button onClick={()=>{navigate("/login")}} className=" bg-amber-950 text-white px-8 py-3 rounded-full font-light cursor-pointer ">Create Account</button>
       }
       <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
       <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
                  {/* <img className="w-36" src={assets.logo} alt="" /> */}
                  {/* <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" /> */}
            </div>
            <div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={()=>setShowMenu(false)} to={"/"} className='px-4 py-2 rounded full inline-block'><p>Home</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={"/doctors"} className='px-4 py-2 rounded full inline-block'><p>All Doctors</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={"/about"} className='px-4 py-2 rounded full inline-block'><p>About Us</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={"/contact"} className='px-4 py-2 rounded full inline-block'><p>Contact Us</p></NavLink>
                </ul>
            </div>
       </div>
      </div>
    </div>
  
)}


export default Navbar
