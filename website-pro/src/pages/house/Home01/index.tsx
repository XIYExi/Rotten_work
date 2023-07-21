import React from 'react';
import HomePage from "@/pages/house/Home01/HomePage";
import SearchBarPage from "@/pages/house/Home01/SearchBar";
import BestChoicePage from "@/pages/house/Home01/BestChoice";

export default function Home01() {

  return(
    <>
      {/*首页*/}
      <HomePage />
      {/*搜索条*/}
      <SearchBarPage />
      {/*Best Choice 卡片*/}
      <BestChoicePage />

    </>
  )
}
