/**
 * @Description: Home03 的入口页面，Home03中Header和 Home01以及Home02中不同，
 * 在Home03中Header布局方式为relative而不是absolute！
 * 同时不会组件会有大的调整，需要重新写一份
 * @Author: xiye
 * @date: 2023/7/26
 */
import React from "react";
import {IRouteProps} from "umi";
import OwnerInputComponent from "@/pages/house/components/OwnerInput";
import FooterComponent from "@/pages/house/components/Footer";
import './house.less';
import Header02Component from "@/pages/house/components/Header02";

export default function Index02Page({children}: IRouteProps) {


  return(
    <>
      <Header02Component />
      {children}
      <OwnerInputComponent />
      <FooterComponent />
    </>
  )
}
