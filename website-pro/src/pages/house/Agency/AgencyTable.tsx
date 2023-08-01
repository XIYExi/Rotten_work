import {useEffect, useState} from "react";
import brand1 from '@/assets/image/brands/brand1.png';
import brand2 from '@/assets/image/brands/brand2.png';
import brand3 from '@/assets/image/brands/brand3.png';
import brand4 from '@/assets/image/brands/brand4.png';
import brand5 from '@/assets/image/brands/brand5.png';
import brand6 from '@/assets/image/brands/brand6.png';

interface AgencyDataProps {
  title: string;
  desc: string;
  meta: string;
  src: string;
}

interface TableDataMsgProps {
  data: AgencyDataProps[];
  size: number;
  begin: number;
  limit: number;
  paginationSize: number;
  curPagination: number;
}

export default function AgencyTablePage() {



  const [table, setTable] = useState<TableDataMsgProps | any>({});
  const [data, setData] = useState<AgencyDataProps[]>([]);
  useEffect(() => {
    (async () => {
      const {default: Graph} = await import('@/assets/data/AgencyData');
      const json: TableDataMsgProps = {
        data: Graph.AgencyData,
        size: Graph.AgencyData.length,
        begin: 0,
        limit: 10,
        paginationSize: Math.ceil(Graph.AgencyData.length / 10), // 向上取整，获得导航条的长度
        curPagination: 0,
      }
      setTable(json);
      setData(Graph.AgencyData.slice(0, 10));
    })()
  }, [])

  const handlePaginationJump = (index: number) => {
    console.log('jump', index)
    // 0 ~ 9
    // 10 ~ 19
    // (索引)当前页第一个 index * 10
    // (索引)当前页最后一个 10 * (index + 1) - 1
    const begin = index * 10;
    const end = 10 * ( index + 1 ) > table.size ? table.size : (10 * (index+1));
    setData(table.data.slice(begin, end)); // [begin, end)
  }

  return(
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid sm:grid-cols-2 gap-[30px]'>
          {
            data.map((item:AgencyDataProps, index:number) => (
              <AgencyCardItem
                key={index}
                title={item.title}
                desc={item.desc}
                meta={item.meta}
                src={item.src}
              />
            ))
          }
        </div>
        {/*导航条*/}
        <div className='grid grid-cols-12 mt-[50px] gap-x-[30px]'>
          <div className='col-span-12'>
            <ul className="pagination flex flex-wrap items-center justify-center">
              {
                table && new Array(table.paginationSize).fill(0).map((item: number, index:number) => (
                  <li className="mx-2" key={index}>
                    <div className="flex flex-wrap items-center justify-center
                  w-[26px] h-[26px] leading-none hover:text-white hover:bg-primary rounded-[15px]"
                         onClick={() => handlePaginationJump(index)}
                    >
                      {index + 1}
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}



const AgencyCardItem = (props: AgencyDataProps) => {

  const renderImage = (type: string) => {
    switch (type){
      case '1':
        return brand1;
      case '2':
        return brand2;
      case '3':
        return brand3;
      case '4':
        return brand4;
      case '5':
        return brand5;
      case '6':
        return brand6;
      default:
        return brand1;
    }
  }

  return(
    <div className='modify-scale-hover rounded-md p-[25px] sm:p-[20px] lg:p-[25px] drop-shadow-md bg-[#FFFDFC] flex flex-col xl:flex-row flex-wrap'>
      <img src={renderImage(props.src)} className="self-center mb-[15px] xl:mb-0" width="220"
           height="208" loading="lazy" alt={props.title}/>

      <div className='flex-1'>
        <div className='sm:flex flex-wrap md:items-center md:justify-center flex-col text-center'>
          <h4 className="font-recoleta text-primary text-[22px] lg:text-[28px]">
            {props.title}<span className="text-secondary">.</span>
          </h4>
          <span className="underline text-secondary font-light block mb-[15px]">
            {props.desc}
          </span>
          <p className="mb-[15px] xl:mb-[30px] font-recoleta text-primary text-[16px]">
            {props.meta}
          </p>
          <a href='#'
             className="inline-block before:rounded-md before:block before:absolute before:left-auto before:right-0
              before:inset-y-0 before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0
              hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium
              text-white text-center text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0
              index-modify after:bg-primary after:rounded-md after:transition-all">
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}
