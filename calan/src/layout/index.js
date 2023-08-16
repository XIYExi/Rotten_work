import {Outlet} from "react-router-dom";
import {useCallback, useEffect} from "react";
const Creator = require('../func/Creator');


export default function LayoutIndex(){

    const handleGenerateDemo = () => {
        (async () => {
           await new Creator().generateWithDom().generate('test');
        })()


    }

  return(
    <div className='relative'>

        <div
            onClick={handleGenerateDemo}
            className='z-[999] absolute cursor-pointer top-0 left-0 py-2 px-10 text-[18px] font-[500]  transition-all duration-300 bg-black text-white border-2 hover:bg-white hover:text-black'>
            Generate Demo
        </div>


      <div id='test'></div>

      <Outlet />

    </div>
  )
}
