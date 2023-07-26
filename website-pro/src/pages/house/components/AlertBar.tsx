/**
 * @Description: 顶部的信息提醒条
 * @Author: xiye
 * @date: 2023/7/26
 */
import React from "react";

export default function AlertBarComponent () {

  return(
    <div className='relative bg-primary font-recoleta text-white py-[11px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px] items-center'>
          <div className='col-span-12 sm:col-span-6 text-center sm:text-left'>
            <p>Have a question? <a className="hover:text-secondary" href="">+9985 254 784</a></p>
          </div>
          <div className="col-span-12 sm:col-span-6 text-center sm:text-right">
            <p>Visit us:9am to 10 pm(Mon - Fri)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
