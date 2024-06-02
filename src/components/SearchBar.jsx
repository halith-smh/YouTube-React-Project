import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchCache } from "../store/slice/gloalSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const cache = useSelector((store) => store.global.searchCache);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    // console.log("API Called");
    setSearchResults(json[1]);
    dispatch(addSearchCache({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchResults(cache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 150);

    //cleanUp Function
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  return (
    <form action="#" className="col-span-10  mt-1 ml-28">
      <div className="search-bar">
        <input
          className="w-[30rem] py-1 px-4 rounded-l-full border border-gray-300 outline-none focus:border-gray-500"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          placeholder="Search"
        />
        <button className="rounded-r-full py-1 px-4 border border-gray-300">
          <i className="bi bi-search"></i>
        </button>
        <i className="ml-4 cursor-pointer bi bi-mic-fill"></i>
      </div>
      {showSuggestion && (
        <div className="search-suggestions fixed bg-white w-[30rem] rounded-lg shadow-2xl p-4">
          <ul>
            {searchResults.map((name) => (
              <li
                key={name}
                className="font-medium py-1 hover:hover:bg-gray-100 px-2 cursor-default rounded-md"
              >
                <i className="bi bi-search text-sm pr-2"></i>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
