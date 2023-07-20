import React, {Fragment} from "react";
import search from '@/assets/image/search/search.svg';

const SearchBarButton = ({ children, ...restProps }: any) => (
  <button
    className='font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base
    xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[""]
    before:bg-secondary relative before:transition-all ease-out'
  >
    {children}
  </button>
)

export default function SearchBarIndex() {

  return(
    <Fragment>

      <div className='mt-[80px] lg:mt-[120px] xl:mt-[-160px] relative z-10 pl-[40px] lg:pl-[50px] xl:pl-[0px]'>
        <div className='my-container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 relative'>

              <ul className='tab-nav inline-flex px-[150px] sm:px-[30px] py-[22px] border-l border-t border-r border-solid
              border-[#016450] border-opacity-25 rounded-tl-[15px] rounded-tr-[15px] bg-white'>
                <li data-tab='buy' className='mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 active'>
                  <SearchBarButton>bug</SearchBarButton>
                </li>
                <li data-tab='sell' className='mr-[5px] sm:mr-[10px] md:mr-[46px] my-1'>
                  <SearchBarButton>sell</SearchBarButton>
                </li>
                <li data-tab='rent' className='mr-[5px] sm:mr-[10px] md:mr-[46px] my-1'>
                  <SearchBarButton>rent</SearchBarButton>
                </li>
                <li data-tab='co-living' className='md:mr-[0px] my-1'>
                  <SearchBarButton>Co-living</SearchBarButton>
                </li>
              </ul>


              <button className="tab-toggle-btn px-[10px] py-[15px] absolute bottom-[-56px] left-[-45px] border-l border-t
                         border-b border-solid border-[#016450] bg-white text-primary
                         border-opacity-25 rounded-tl-[10px] rounded-bl-[10px]" aria-label="svg icon">
                <img width="24" height="24" src={search} alt='search bar'/>
              </button>
            </div>


            <div className='col-span-12 selectricc-border-none'>

            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
