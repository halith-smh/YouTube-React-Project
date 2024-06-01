import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="py-2 sticky pr-10 col-span-1  h-[90vh]  shadow-lg">
      <div className="catg p-2">
        <ul className="mt-2">
          <Link to='/'> <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-house-door pr-2 relative"></i>Home</li>  </Link>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-file-earmark-play pr-2"></i>Shorts</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-fast-forward-btn pr-2"></i>Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div className="catg p-2">
        <h1 className="font-bold">Explore</h1>
        <ul className="mt-2">
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-fire pr-2"></i>Trending</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-bag-heart pr-2"></i>Shopping</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-file-earmark-music pr-2"></i>Music</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-film pr-2"></i>Films</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-broadcast pr-2"></i>Live</li>
          <li className="mb-1 text-sm cursor-pointer hover:bg-gray-200 rounded-lg p-2"><i className="bi bi-controller pr-2"></i>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
