/**
 * @Description: Home06 页面，有较大的调整
 * @Author: xiye
 * @date: 2023/7/27
 */
import React from "react";
import AlertBarComponent from "@/pages/house/components/AlertBar";
import Header02Component from "@/pages/house/components/Header02";
import HomePage from "@/pages/house/Home06/HomePage";
import ChooseUs02Page from "@/pages/house/Home06/ChooseUs02";
import HowWorksPage from "@/pages/house/Home06/HowWorks";
import MaterialsPage from "@/pages/house/Home06/Materials";
import Materials02Page from "@/pages/house/Home06/Materials02";
import FloorPlanPage from "@/pages/house/Home06/FloorPlan";
import GalleryPage from "@/pages/house/Home06/Gallery";
import Agents02Page from "@/pages/house/Home06/Agents02";
import BlogsPage from "@/pages/house/Home01/Blogs";

export default function Home06Page() {

  return(
    <>
      <AlertBarComponent />
      <Header02Component />
      <HomePage />
      <ChooseUs02Page />
      <HowWorksPage />
      <MaterialsPage />
      <Materials02Page />
      <FloorPlanPage />
      <GalleryPage />
      <Agents02Page />
      <BlogsPage />

    </>
  )
}
