/**
 * @Description: 房地产搜索条
 * @Author: xiye
 * @date: 2023/7/20 ~ 203/7/21
 */
import React, {Fragment, ReactNode, useState} from "react";
import {ReactComponent as SearchSvgIcon} from '@/assets/image/search/search.svg';
import classnames from "classnames";
import area from '@/assets/image/icon/area.svg';
import dollarCircle from '@/assets/image/icon/dollar-circle.svg';
import location from '@/assets/image/icon/location.svg';
import property from '@/assets/image/icon/property.svg';
import searchOutline from '@/assets/image/icon/search-outline.svg';


const SearchBarButton = ({ children, onClick, ...restProps }: any) => (
  <button
    className='font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base
    xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[""]
    before:bg-secondary relative before:transition-all ease-out'
    onClick={onClick}
    {...restProps}
  >
    {children}
  </button>
)

export default function SearchBarPage(props:any) {

  const [svgActive, setSvgActive] = useState<boolean>(false);
  const [content, setContent] = useState<'Buy' | 'Sell' | 'Rent' | 'Co'>('Buy')

  const defaultClassName = 'mt-[80px] lg:mt-[120px] xl:mt-[-160px] relative z-10 pl-[40px] lg:pl-[50px] xl:pl-[0px]';

  return(
    <Fragment>

      <div className={props.className !== undefined && props.className.length > 0 ? props.className : defaultClassName}>
        <div className='my-container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 relative'>

              <ul className='tab-nav inline-flex px-[15px] sm:px-[30px] py-[22px] border-l border-t border-r border-solid
              border-[#016450] border-opacity-25 rounded-tl-[15px] rounded-tr-[15px] bg-white'>
                <li data-tab='buy' className={`mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 ${content.toString() === 'Buy' && 'active'} `}>
                  <SearchBarButton
                    onClick={() => setContent('Buy')}
                  >buy</SearchBarButton>
                </li>
                <li data-tab='sell' className={`mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 ${content.toString() === 'Sell' && 'active'} `}>
                  <SearchBarButton
                    onClick={() => setContent('Sell')}
                  >sell</SearchBarButton>
                </li>
                <li data-tab='rent' className={`mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 ${content.toString() === 'Rent' && 'active'}`}>
                  <SearchBarButton
                    onClick={() => setContent('Rent')}
                  >rent</SearchBarButton>
                </li>
                <li data-tab='co-living' className={`md:mr-[0px] my-1 ${content.toString() === 'Co' && 'active'}`}>
                  <SearchBarButton
                    onClick={() => setContent('Co')}
                  >Co-living</SearchBarButton>
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
              { content === 'Buy' &&  <SearchBarForm id='buy' active={svgActive} />}
              { content === 'Sell' &&  <SearchBarFormOther id='co-living' active={svgActive} />}
              { content === 'Rent' &&  <SearchBarForm id='rent' active={svgActive} />}
              { content === 'Co' &&  <SearchBarFormOther id='co-living' active={svgActive} />}
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
  /*tab-content的控制样式，用于判断渲染得是哪一个表单, !!!没有意义，必定为active!!!*/
  /*content:boolean;*/
}

const SearchBarForm = (props: SearchBarFormProps) => {

  const {
    id,
    active,
    /*content = true,*/
  } = props;


  const FormWrapperClassName = classnames(
    /*自定义样式*/
    'tab-content',
    /*tailwind样式*/
    'bg-white border border-solid border-[#016450] border-opacity-25 ',
    'rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]',
    /*自定义样式*/
    {
      /*'active': content*/
    });

  return (
    <Fragment>
      <div id={id} className={`${FormWrapperClassName}`}>
        <form action='#'>
          <div className='advanced-search flex flex-wrap items-center'
               style={{marginBottom:'-45px'}}
          >
            {/*location*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'location'}
              src={location}
              last={false}
              hiddenList={false}
              label='Location'
            >
              <input id='location' type='text' placeholder='Choose location'
                     className='text-tiny placeholder:text-gray-400 leading-none font-light pr-3 focus:outline-none w-full'
              />
            </SearchBarFormItem>

            {/*property*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'property'}
              src={property}
              last={false}
              hiddenList={false}
              label='Property Type'
            >
              <select name='property' id='property'
                      className='nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>Duplex House</option>
                <option value='1'>Duplex House 1</option>
                <option value='2'>Duplex House 2</option>
                <option value='3'>Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*dollar-circle*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'price'}
              src={dollarCircle}
              last={false}
              hiddenList={false}
              label='Price Range'
            >
              <select name='price' id='price'
                      className='nice-select appearance-none bg-transparent focus:outline-none text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>1500 USD</option>
                <option value='1'>1600 USD</option>
                <option value='2'>1700 USD</option>
                <option value='3'>1800 USD</option>
              </select>
            </SearchBarFormItem>

            {/*area*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor='property-size'
              src={area}
              last={true}
              hiddenList={false}
              label='Property Size'
              lastNode={
                <button
                  className={`search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px] ${active ? 'hidden': ''}`}>
                  <img src={searchOutline} className="max-w-[30px] xl:w-auto" width="40" height="40" alt="svg icon" />
                </button>
              }
            >
              <select name='property-size' id='property-size'
                      className='nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>2500 Sqft</option>
                <option value="1">2600 Sqft</option>
                <option value="2">2700 Sqft</option>
                <option value="3">2800 Sqft</option>
              </select>
            </SearchBarFormItem>
          </div>
          <div className={`advanced-search-hidden flex flex-wrapper items-center mt-[45px] ${active ? 'active' : ''}`}
               style={{marginBottom:'-45px'}}
          >
            {/*BedRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='bedrooms10'
              label='Bedrooms'
              src={location}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="bedrooms10"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">Bedrooms</option>
                <option value="1">kitchen</option>
                <option value="2">dinning rooms</option>
                <option value="3">Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*BathRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='bathrooms10'
              label='Bathrooms'
              src={area}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="bathrooms10"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">Duplex House</option>
                <option value="1">Duplex House 1</option>
                <option value="2">Duplex House 2</option>
                <option value="3">Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*BathRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='garage'
              label='Garage'
              src={dollarCircle}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="garage"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">2 Garage</option>
                <option value="1">3 Garage</option>
                <option value="2">4 Garage</option>
                <option value="3">5 Garage</option>
              </select>
            </SearchBarFormItem>

            <div className="advanced-search-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px]
            xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
              <button className="search-properties-btn">Search Properties</button>
            </div>


          </div>
        </form>
      </div>
    </Fragment>
  )
}

/*和上述的SearchBarForm是一样的，只有内部的选项数据有变动，用于区分*/
const SearchBarFormOther = (props: SearchBarFormProps) => {

  const {
    id,
    active,
    /*content = true,*/
  } = props;


  const FormWrapperClassName = classnames(
    /*自定义样式*/
    'tab-content',
    /*tailwind样式*/
    'bg-white border border-solid border-[#016450] border-opacity-25 ',
    'rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]',
    /*自定义样式*/
    {
      /*'active': content*/
    });

  return (
    <Fragment>
      <div id={id} className={`${FormWrapperClassName}`}>
        <form action='#'>
          <div className='advanced-search flex flex-wrap items-center'
               style={{marginBottom:'-45px'}}
          >
            {/*location*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'location'}
              src={location}
              last={false}
              hiddenList={false}
              label='Location'
            >
              <input id='location' type='text' placeholder='Choose location'
                     className='text-tiny placeholder:text-gray-400 leading-none font-light pr-3 focus:outline-none w-full'
              />
            </SearchBarFormItem>

            {/*property*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'property'}
              src={property}
              last={false}
              hiddenList={false}
              label='Property Type'
            >
              <select name='property' id='property'
                      className='nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>Apartments</option>
                <option value='1'>Duplex House 1</option>
                <option value='2'>Duplex House 2</option>
                <option value='3'>Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*dollar-circle*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor={'price'}
              src={dollarCircle}
              last={false}
              hiddenList={false}
              label='Price Range'
            >
              <select name='price' id='price'
                      className='nice-select appearance-none bg-transparent focus:outline-none text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>100 USD</option>
                <option value='1'>1600 USD</option>
                <option value='2'>1700 USD</option>
                <option value='3'>1800 USD</option>
              </select>
            </SearchBarFormItem>

            {/*area*/}
            <SearchBarFormItem
              active={undefined}
              htmlFor='property-size'
              src={area}
              last={true}
              hiddenList={false}
              label='Property Size'
              lastNode={
                <button
                  className={`search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px] ${active ? 'hidden': ''}`}>
                  <img src={searchOutline} className="max-w-[30px] xl:w-auto" width="40" height="40" alt="svg icon" />
                </button>
              }
            >
              <select name='property-size' id='property-size'
                      className='nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer'
              >
                <option selected value='0'>500 Sqft</option>
                <option value="1">2600 Sqft</option>
                <option value="2">2700 Sqft</option>
                <option value="3">2800 Sqft</option>
              </select>
            </SearchBarFormItem>
          </div>
          <div className={`advanced-search-hidden flex flex-wrapper items-center mt-[45px] ${active ? 'active' : ''}`}
               style={{marginBottom:'-45px'}}
          >
            {/*BedRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='bedrooms10'
              label='Bedrooms'
              src={location}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="bedrooms10"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">Bedrooms</option>
                <option value="1">kitchen</option>
                <option value="2">dinning rooms</option>
                <option value="3">Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*BathRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='bathrooms10'
              label='Bathrooms'
              src={area}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="bathrooms10"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">Duplex House</option>
                <option value="1">Duplex House 1</option>
                <option value="2">Duplex House 2</option>
                <option value="3">Duplex House 3</option>
              </select>
            </SearchBarFormItem>

            {/*BathRooms*/}
            <SearchBarFormItem
              active={active}
              htmlFor='garage'
              label='Garage'
              src={dollarCircle}
              last={false}
              hiddenList={true}
            >
              <select
                name="property" id="garage"
                className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                <option selected value="0">2 Garage</option>
                <option value="1">3 Garage</option>
                <option value="2">4 Garage</option>
                <option value="3">5 Garage</option>
              </select>
            </SearchBarFormItem>

            <div className="advanced-search-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px]
            xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
              <button className="search-properties-btn">Search Properties</button>
            </div>


          </div>
        </form>
      </div>
    </Fragment>
  )
}


interface SearchBarFormItemProps {
  active?: boolean | undefined;
  htmlFor:string;
  children: ReactNode;
  /*是否为最后一个元素，第一行最后一个元素需要后置一个Button*/
  last?: boolean
  lastNode?:ReactNode
  src?:string;
  /*是否为隐藏的子项，需要点击svgicon才会显示的内容*/
  hiddenList?:boolean;
  label: string;
}

const SearchBarFormItem = (props: SearchBarFormItemProps) => {

  const {
    active,
    htmlFor,
    children,
    last = false,
    src,
    hiddenList = false,
    label,
    lastNode
  } = props;

  const SearchBarItemClassName = classnames(`advanced-search-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]`,
    {
      'relative': last,
      'search-list': hiddenList,
    })

  return (
    <Fragment>
      <div className={`${SearchBarItemClassName} ${ active === true ? 'active' : ''}`}>
        <div className='mr-4 self-start flex-shrink-0'>
          <img src={src} width='24' height='24' alt='svg icon'/>
        </div>
        <div className='flex-1'>
          <label htmlFor={htmlFor} className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">
            {label}
          </label>
          {children}
        </div>
        {lastNode}
      </div>
    </Fragment>
  )
}


const SearchBarInput = () => {

  return(
    <input />
  )
}
