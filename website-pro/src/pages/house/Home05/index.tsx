import React from "react";
import BlogsPage from "@/pages/house/Home01/Blogs";
import HomePage from "@/pages/house/Home05/HomePage";
import AlertBarComponent from "@/pages/house/components/AlertBar";
import Header02Component from "@/pages/house/components/Header02";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import BestChoicePage from "@/pages/house/Home01/BestChoice";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import about02 from "@/assets/image/about/about2.png";
import ExploreCitiesPage from "@/pages/house/Home01/ExploreCities";
import TestimonialPage from "@/pages/house/Home01/Testimonial";
import VideoTourPage from "@/pages/house/Home01/VideoTour";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import Testimonial02Page from "@/pages/house/Home04/Testimonial02";
import PartnerPage from "@/pages/house/Home01/Partner";

export default function House05Page() {
  return(
    <>
      <AlertBarComponent/>
      <Header02Component />

      <HomePage />

      <SearchBarPage/>
      <BestChoicePage />
      <ChooseUsPage img={about02} imgWidth={813} imgHeight={707}/>
      <ExploreCitiesPage />
      <VideoTourPage/>
      <NewlyAddedPage/>
      <Testimonial02Page />
      <PartnerPage />
      <BlogsPage />
    </>
  )
}
