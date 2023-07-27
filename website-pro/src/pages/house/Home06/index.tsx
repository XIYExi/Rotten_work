/**
 * @Description: Home06 页面，有较大的调整
 * @Author: xiye
 * @date: 2023/7/27
 */
import React from "react";
import AlertBarComponent from "@/pages/house/components/AlertBar";
import Header02Component from "@/pages/house/components/Header02";
import HomePage from "@/pages/house/Home06/HomePage";

export default function Home06Page() {

  return(
    <>
      <AlertBarComponent />
      <Header02Component />

      <HomePage />

    </>
  )
}
