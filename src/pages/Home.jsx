import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CatgBtns from "../components/CatgBtns";
import VideoConatiner from "../components/VideoConatiner";
import { useSelector } from "react-redux";

const Home = () => {
    const showSideBar = useSelector(store => store.global.showSideBar);
  return (
    <>
      <Header />
      <main className="grid grid-flow-col">
        {showSideBar && <div className="col-span-3">
          <SideBar />
        </div>}
        <section className="col-span-9 p-4 mr-2 ml-8">
          <CatgBtns />
          <VideoConatiner />
        </section>
      </main>
    </>
  );
};

export default Home;
