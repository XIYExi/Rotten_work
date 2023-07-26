/**
 * @Description: Header02组件，相对定位
 * @Author: xiye
 * @date: 2023/7/26
 */
import React, {useEffect, useState} from "react";
import logo from "@/assets/image/logo/logo.svg";
import avatar from "@/assets/image/user/avater.png";
import {HeaderNavItem} from "@/pages/house/components/Header";

export default function Header02Component() {

  const [navItemData, setNavItemData] = useState<any>();
  // @ts-ignore
  useEffect(async () => {
    const { default: Graph } = await import('@/assets/data/HeaderNavData');
    // console.log(Graph)
    setNavItemData(Graph.NavData);
  }, [])

  return(
    <header id="sticky-header" className="relative bg-[#ECFAF7] lg:py-[30px] z-[25] secondary-sticky">
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>

            <div className='flex flex-wrap items-center justify-between'>
              {/*logo*/}
              <a href='#' className='block'>
                <img className='w-full h-full' src={logo} loading='lazy' width='99' height='46' alt='brand logo'/>
              </a>

              {/*导航*/}
              <nav className='flex flex-wrap items-center'>
                {/*菜单，lg以上才显示，小于lg在最右侧显示折叠菜单按钮*/}

                <ul  className='hidden lg:flex flex-wrap items-center font-recoleta text-[16px] xl:text-[18px] leading-none text-black'>
                  {
                    /*@ts-ignore*/
                    navItemData?.map((item:HeaderNavItemProps, index:number) => (
                      <HeaderNavItem key={index} name={item.name} navItem={item.navItem}/>
                    ))
                  }
                </ul>

                {/*右侧图标和按钮*/}
                <ul className='flex flex-wrap items-center'>
                  {/*头像和下滑登录注册菜单*/}
                  <li className='sm:mr-5 xl:mr-[20px] relative group'>
                    <a href='#'>
                      <img src={avatar} loading='lazy' width='62' height='62' alt='avater'/>
                    </a>

                    <ul className='list-none bg-white drop-shadow-modify rounded-[12px]
                    flex flex-wrap flex-col w-[180px] absolute top-[120%] sm:left-1/2 sm:-translate-x-1/2 transition-all group-hover:top-[60px]
                    invisible group-hover:visible opacity-0 group-hover:opacity-100 right-0'>
                      {/*注册*/}
                      <li className='border-b border-dashed border-primary border-opacity-40 last:border-0 hover:border-solid transition-all'>
                        <a href='#' className='font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize
                        block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]'>login</a>
                      </li>

                      {/*注册*/}
                      <li className='border-b border-dashed border-primary border-opacity-40 last:border-0 hover:border-solid transition-all'>
                        <a href='#' className='font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize
                        block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]'>register</a>
                      </li>
                    </ul>
                  </li>

                  {/*Add Property按钮*/}
                  <li>
                    <a className='before:rounded-md before:block before:absolute before:left-auto before:right-0 z-10
                    before:inset-y-0 before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0
                    hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium
                    text-white hidden sm:block text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0
                    after:bg-primary after:rounded-md after:transition-all index-modify'>Add Property</a>
                  </li>
                  <li className='ml-2 sm:ml-5 lg:hidden'>
                    <a href='#' className='offcanvas-toggle flex text-[#016450] hover:text-secondary'>
                      <svg
                        width="24" height="24" className="fill-current"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                      </svg>
                    </a>
                  </li>
                  <li className="ml-2 sm:ml-5 lg:hidden">
                    <a href="#" className="offcanvas-toggle flex text-[#016450] hover:text-secondary" />
                  </li>
                </ul>

              </nav>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
