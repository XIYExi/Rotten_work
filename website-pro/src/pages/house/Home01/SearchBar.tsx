import React, {Fragment, ReactNode, useState} from "react";
import {ReactComponent as SearchSvgIcon} from '@/assets/image/search/search.svg';
import classnames from "classnames";

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

  const [svgActive, setSvgActive] = useState<boolean>(false);

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

              <button className={`tab-toggle-btn px-[10px] py-[15px] absolute bottom-[-56px] left-[-45px] border-l border-t border-b border-solid border-[#016450] bg-white text-primary
                border-opacity-25 rounded-tl-[10px] rounded-bl-[10px] ${svgActive ? 'active' : ''}`}
                      aria-label="svg icon"
                      onClick={() => setSvgActive(!svgActive)}
              >
                <SearchSvgIcon />
              </button>
            </div>

            <div className='col-span-12 selectricc-border-none'>
              <SearchBarForm id='buy' active={svgActive}/>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}


interface SearchBarFormProps {
  id: string;
  active:boolean;
}

const SearchBarForm = (props: SearchBarFormProps) => {

  const {
    id,
    active,
  } = props;


  const FormWrapperClassName = classnames(
    /*自定义样式*/
    'tab-content ',
    /*tailwind样式*/
    'bg-white border border-solid border-[#016450] border-opacity-25 ' +
    'rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]',
    );

  return (
    <Fragment>
      <div id={id} className={`${FormWrapperClassName}`}>
        <form action='#'>
          <div className='advanced-search flex flex-wrapper items-center -mb-[45px]'>

          </div>
          <div className={`advanced-search-hidden flex flex-wrapper items-center mt-[45px] -mb-[45px] ${active ? 'active' : ''}`}>

          </div>
        </form>
      </div>
    </Fragment>
  )
}

interface SearchBarFormItemProps {
  active: boolean;
  htmlFor:string;
  children: ReactNode;
  /*是否为最后一个元素，第一行最后一个元素需要后置一个Button*/
  last?: boolean
  src?:string;
  /*是否为隐藏的子项，需要点击svgicon才会显示的内容*/
  hiddenList?:boolean;
}

const SearchBarFormItem = (props: SearchBarFormItemProps) => {

  const {
    active,
    htmlFor,
    children,
    last = false,
    src,
    hiddenList = false,
  } = props;

  const SearchBarItemClassName = classnames(`advanced-search-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]`,
    {
      'relative': last,
      'search-list': hiddenList,
    })

  return (
    <Fragment>
      <div className={SearchBarItemClassName}>
        <div className='mr-4 self-start flex-shrink-0'>
          <img src={src} width='24' height='24' alt='svg icon'/>
        </div>
        <div className='flex-1'>
          <label htmlFor={htmlFor} className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">Location</label>
          {children}
        </div>
      </div>
    </Fragment>
  )
}


const SearchBarInput = () => {

  return(
    <input />
  )
}
