import React from "react";
import Logo from '../imgs/logo.png';
import { useDispatch } from "react-redux";
import { changeSideBar } from "../store/slice/gloalSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="shadow-sm py-3">
      <div className="grid grid-flow-col">
        <div className="flex col-span-1">
          <i onClick={() => dispatch(changeSideBar())} className="bi bi-list text-2xl ml-2 cursor-pointer"></i>
          <Link to='/'><img className="h-6 px-4 mt-1" src={Logo} alt="Youtube Logo" /></Link>
        </div>
        <form action="#" className="col-span-10  mt-1 ml-28" >
          <input className="w-[25rem] py-1 px-4 rounded-l-full border border-gray-300 outline-none focus:border-gray-500" type="search" placeholder="Search" />
          <button className="rounded-r-full py-1 px-4 border border-gray-300">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="flex col-span-1 mt-1">
          <i className="bi bi-camera-reels mr-6 text-lg cursor-pointer"></i>
          <i className="bi bi-bell mr-6 text-lg cursor-pointer"></i>
          <i className="bi bi-person-circle mr-6 text-lg cursor-pointer"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
