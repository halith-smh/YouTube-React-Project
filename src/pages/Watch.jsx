import React, { useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { clodeSideBar } from "../store/slice/gloalSlice";
import { useSearchParams } from "react-router-dom";
import WatchConatiner from "../components/WatchConatiner";

const Watch = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(store => store.global.showSideBar);

  const [videoIdParam] = useSearchParams();
  // console.log(data.get('v'));

  useEffect(() => {
    dispatch(clodeSideBar());
  },[])

  return (
    <>
      <Header />
      <main className="grid grid-flow-col">
        {showSideBar && (
          <div className="col-span-1">
            <SideBar />
          </div>
        )}
        <section className="col-span-10 p-4 mr-2 ml-8">
          <WatchConatiner videoId={videoIdParam.get('v')} />
          {/* <CatgBtns /> */}
          {/* <VideoConatiner /> */}
        </section>
      </main>
    </>
  );
};

export default Watch;
