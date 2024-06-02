import React from "react";
import Logo from '../imgs/logo.png';
import { useDispatch } from "react-redux";
import { changeSideBar } from "../store/slice/gloalSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="shadow-sm py-3">
      <div className="grid grid-flow-col">
        <div className="flex col-span-1">
          <i onClick={() => dispatch(changeSideBar())} className="bi bi-list text-2xl ml-2 cursor-pointer"></i>
          <Link to='/'><img className="h-6 px-4 mt-1" src={Logo} alt="Youtube Logo" /></Link>
        </div>
       <SearchBar/>
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
