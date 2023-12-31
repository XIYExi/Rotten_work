import React from 'react';
import HomePage from "@/pages/house/Home01/HomePage";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import VideoTourPage from "@/pages/house/Home01/VideoTour";
import ExploreCitiesPage from "@/pages/house/Home01/ExploreCities";
import TestimonialPage from "@/pages/house/Home01/Testimonial";
import PartnerPage from "@/pages/house/Home01/Partner";
import AgentsPage from "@/pages/house/Home01/Agents";
import BlogsPage from "@/pages/house/Home01/Blogs";
import aboutImage from '@/assets/image/about/about.png';

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
      <ChooseUsPage img={aboutImage}/>
      {/*新增房屋页面*/}
      <NewlyAddedPage />
      {/*视频*/}
      <VideoTourPage />
      {/*Cities页面*/}
      <ExploreCitiesPage />
      {/*客户感言页面*/}
      <TestimonialPage />
      {/*合作伙伴*/}
      <PartnerPage />
      {/*代理人页面*/}
      <AgentsPage />
      {/*Blogs 页面*/}
      <BlogsPage />

    </>
  )
}
