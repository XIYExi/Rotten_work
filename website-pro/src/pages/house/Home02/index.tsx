/**
 * @Description: Home02页面
 *
 * index-2首页和index除了首页第一屏外，没有其他区别，只是其余部件重新排列！
 *
 * @Author: xiye
 * @date: 2023/7/24
 */
import React from "react";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import ExploreCitiesPage from "@/pages/house/Home01/ExploreCities";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import VideoTourPage from "@/pages/house/Home01/VideoTour";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import TestimonialPage from "@/pages/house/Home01/Testimonial";
import PartnerPage from "@/pages/house/Home01/Partner";
import BlogsPage from "@/pages/house/Home01/Blogs";
import HomePage from "@/pages/house/Home02/HomePage";
import about01 from "@/assets/image/about/about.png";

export default function House02() {

  return(
    <>
      {/*首页*/}
      <HomePage />

      <SearchBarPage />
      <ExploreCitiesPage/>
      <ChooseUsPage img={about01}/>
      <BestChoicePage />
      <VideoTourPage />
      <NewlyAddedPage />
      <TestimonialPage />
      <PartnerPage />
      <BlogsPage />
    </>
  )
}
