/**
 * @Description: Home index-3页面
 * @Author: xiye
 * @date: 2023/7/24
 */
import React from "react";
import PartnerPage from "@/pages/house/Home01/Partner";
import ExploreCitiesPage from "@/pages/house/Home01/ExploreCities";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import AgentsPage from "@/pages/house/Home01/Agents";
import TestimonialPage from "@/pages/house/Home01/Testimonial";
import BlogsPage from "@/pages/house/Home01/Blogs";
import HomePage from "@/pages/house/Home03/HomePage";
import SearchBarPage from "@/pages/house/Home01/SearchBar";

export default function House3() {

  return(
    <>

      {/*首页 HomePage*/}
      <div className='relative'>
        <HomePage />



      </div>


      {/*不变的部分*/}
      <PartnerPage style={{paddingBottom:'0px'}}/>
      <ExploreCitiesPage />

      {/*choose us 关于页面需要调整（更换图片）*/}


      {/*不变*/}
      <BestChoicePage />

      {/*video tour略微修改*/}


      <NewlyAddedPage />
      <AgentsPage />
      <TestimonialPage />
      <BlogsPage />
    </>
  )
}
