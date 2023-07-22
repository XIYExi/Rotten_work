import React from 'react';
import HomePage from "@/pages/house/Home01/HomePage";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import VideoTourPage from "@/pages/house/Home01/VideoTour";

export default function Home01() {

  return(
    <>
      {/*首页*/}
      <HomePage />
      {/*搜索条*/}
      <SearchBarPage />
      {/*Best Choice 卡片*/}
      <BestChoicePage />
      {/*关于界面*/}
      <ChooseUsPage />
      {/*新增房屋页面*/}
      <NewlyAddedPage />
      {/*视频*/}
      <VideoTourPage />

    </>
  )
}
