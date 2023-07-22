import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Card, CardProps} from "@/pages/house/Home01/BestChoice";
import Properties1 from "@/assets/image/properties/properties1.jpg";
import Properties2 from "@/assets/image/properties/properties2.jpg";
import Properties3 from "@/assets/image/properties/properties3.jpg";
import Properties4 from "@/assets/image/properties/properties4.jpg";
import Properties5 from "@/assets/image/properties/properties5.jpg";
import Properties6 from "@/assets/image/properties/properties6.jpg";
import Properties7 from '@/assets/image/properties/properties7.jpg';
import Properties8 from '@/assets/image/properties/properties8.jpg';

interface AddedDataProps {
  Properties: CardProps[];
  Buy: CardProps[];
  Sale: CardProps[];
  Rent: CardProps[];
  Co:CardProps[];
}

export default function NewlyAddedPage() {

  const [showType, setShowType] = useState<'Properties' | 'Buy' | 'Sale' | 'Rent' | 'Co'>('Properties');
  const [data, setData] = useState<AddedDataProps>();

  useEffect(() => {
    (async () => {
      const {default: Graph} = await import('@/assets/data/AddedData');
      setData(Graph);
    })()
  }, [])

  const renderImage = (src: string) => {
    switch (src){
      case '1':
        return Properties1;
      case '2':
        return Properties2;
      case '3':
        return Properties3;
      case '4':
        return Properties4;
      case '5':
        return Properties5;
      case '6':
        return Properties6;
      case '7':
        return Properties7;
      case '8':
        return Properties8;
      default:
        return Properties1;
    }
  }

  const renderCards = useCallback((showType: string) => {
    console.log(showType)
    return (
      <Fragment>
        {
          data? data[showType as keyof typeof data].map((item: CardProps, index: number) => (
            <Card
              key={index}
              src={renderImage(item.src)}
              title={item.title}
              address={item.address}
              date={item.date}
              price={item.price}
              meta={item.meta}
            />
          )) : <></>
        }
      </Fragment>
    )
  }, [showType])

  return(
    <section className='py-[80px] lg:py-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>

          <div className='col-span-12'>
            <span className='text-secondary text-tiny inline-block mb-2'>Newly Added</span>
          </div>

          {/*标题和导航*/}
          <div className='col-span-12 flex flex-wrap flex-col md:flex-row items-center justify-between mb-[50px]'>
            <div className='mb-5 lg:mb-0'>
              <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-4xl capitalize'>
                Featured Properties<span className='text-secondary'>.</span>
              </h2>
            </div>

            <ul className='all-properties flex flex-wrap lg:pt-[10px]'>
              <li data-tab='all-properties' className={`mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none ${showType === 'Properties' && 'addedActive'}`}>
                <button className='leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out'
                        onClick={() => setShowType('Properties')}
                >
                  All Properties
                </button>
              </li>
              <li data-tab='ForBuy' className={`mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none ${showType === 'Buy' && 'addedActive'}` }>
                <button className='leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out'
                        onClick={() => setShowType('Buy')}
                >
                  For Buy
                </button>
              </li>
              <li data-tab='ForSale' className={`mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none ${showType === 'Sale' && 'addedActive'}`}>
                <button className='leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out'
                        onClick={() => setShowType('Sale')}
                >
                  For Sale
                </button>
              </li>
              <li data-tab='ForRent' className={`mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none ${showType === 'Rent' && 'addedActive'}`}>
                <button className='leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out'
                        onClick={() => setShowType('Rent')}
                >
                  For Rent
                </button>
              </li>
              <li data-tab='co-living2' className={`mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none ${showType === 'Co' && 'addedActive'}`}>
                <button className='leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out'
                        onClick={() => setShowType('Co')}
                >
                  Co-living
                </button>
              </li>
            </ul>
          </div>

          {/*预览卡片组*/}
          <div className='col-span-12'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {
                data?.[showType as keyof typeof data].map((item: CardProps, index: number) => (
                  <Card
                    key={index}
                    src={renderImage(item.src)}
                    title={item.title}
                    address={item.address}
                    date={item.date}
                    price={item.price}
                    meta={item.meta}
                  />
                ))
              }
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
