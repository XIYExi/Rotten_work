/**
 * @Description: Home04 入口
 * @Author: xiye
 * @date: 2023/7/26
 */
import React from "react";
import HomePage from "@/pages/house/Home04/HomePage";
import BlogsPage from "@/pages/house/Home01/Blogs";
import PartnerPage from "@/pages/house/Home01/Partner";
import AgentsPage from "@/pages/house/Home01/Agents";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import VideoTourPage from "@/pages/house/Home01/VideoTour";
import ExploreCitiesPage from "@/pages/house/Home01/ExploreCities";
import about02 from "@/assets/image/about/about2.png";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import Testimonial02Page from "@/pages/house/Home04/Testimonial02";

export default function Home04Page() {

  return(
    <>


      {/*首页，原图为google map，申请不到api用图片替代*/}
      <HomePage />


      <SearchBarPage />
      <BestChoicePage />
      <ChooseUsPage img={about02} imgWidth={813} imgHeight={707}/>
      <ExploreCitiesPage />
      <VideoTourPage />
      <NewlyAddedPage />
      <AgentsPage style={{paddingBottom: '0px'}}/>
      <PartnerPage />

      <Testimonial02Page />

      <BlogsPage />
    </>
  )
}
