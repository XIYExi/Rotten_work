/**
 * @Description: 代理人页面
 * @Author: xiye
 * @date: 2023/7/24
 */
import React, {useEffect, useState} from "react";
import team1 from '@/assets/image/team/person1.png';
import team2 from '@/assets/image/team/person2.png';
import team3 from '@/assets/image/team/person3.png';
import team4 from '@/assets/image/team/person4.png';
import {ReactComponent as FaceBookSvg} from "@/assets/image/social/facebook.svg";
import {ReactComponent as TwitterSvg} from "@/assets/image/social/twitter.svg";
import {ReactComponent as InsSvg} from "@/assets/image/social/ins.svg";


export default function AgentsPage(props: any) {

  const [data, setData] = useState<AgentsCardProps[]>([])
  useEffect(() => {
    (async () => {
      const {default: Graph} = await import('@/assets/data/TeamsData');
      setData(Graph.Teams);
    })()
  }, [])

  return(
    <section className='pb-[80px] lg:pb-[120px] overflow-hidden' style={props.style}>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className="mb-[30px] lg:mb-[60px] text-center">
              <span className="text-secondary text-tiny inline-block mb-2">Our Agents</span>
              <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-4xl capitalize">
                Here is our Experts<span className="text-secondary">.</span></h2>
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] mb-[30px]'>
          {
            data.map((item:AgentsCardProps, index:number) => (
              <AgentCard
                key={index}
                href={item.href}
                src={item.src}
                title={item.title}
                desc={item.desc}
                facebook={item.facebook}
                twitter={item.title}
                ins={item.ins}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export interface AgentsCardProps {
  href: string;
  src: string;
  title: string;
  desc: string;
  facebook: string;
  twitter: string;
  ins: string;
}

export const AgentCard = (props: AgentsCardProps) => {

  const {
    href,
    src,
    title,
    desc,
    facebook,
    twitter,
    ins,
  } = props;

  const renderImage = (type: string) => {
    switch (type) {
      case '1':
        return team1;
      case '2':
        return team2;
      case '3':
        return team3;
      case '4':
        return team4;
      default:
        return team1;
    }
  }


  return (
    <div className='text-center group mb-[30px]'>
      {/*人像*/}
      <div className="relative rounded-tr-[6px] rounded-tl-[6px]">
        <a href={href} className="block relative before:absolute before:content-[''] before:inset-x-0 before:bottom-0 before:bg-[#F5F9F8]
         before:w-full custom-h-before2 custom-before-zIndex before:rounded-[6px_6px_0px_0px]">
          <img src={renderImage(src)} className="w-auto h-auto block mx-auto" loading="lazy" width="215" height="310" alt="Albert S. Smith"/>
        </a>
      </div>

      {/*信息*/}
      <div className="bg-[#FFFDFC] z-10 drop-shadow-modify rounded-[0px_0px_6px_6px] px-[15px] py-[20px] border-b-[6px]
       border-primary before:transition-all before:duration-300 group-hover:border-secondary relative before:absolute before:left-0
       before:bottom-0 before:h-0 before:w-full before:bg-primary custom-before-zIndex group-hover:before:h-full">
        <h3>
          <a href={href} className="font-recoleta font-normal text-base text-primary group-hover:text-white">
            {title}
          </a>
        </h3>
        <p className="font-normal text-[14px] leading-none capitalize mt-[5px] group-hover:text-white">
          {desc}
        </p>
        <ul
          className="inline-flex items-center justify-center absolute w-full top-[-15px] left-0 overflow-hidden">
          <li className="translate-y-[30px] group-hover:translate-y-[0] transition ease-in-out duration-300 delay-300 first:ml-0 ml-[15px]">
            <a href={facebook} className="w-[26px] h-[26px] transition-all rounded-full bg-[#FFF6F0] flex items-center justify-center hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-[#494949] hover:text-[#3B5998]">
              <FaceBookSvg />
            </a>
          </li>
          <li
            className="translate-y-[30px] group-hover:translate-y-[0] transition ease-in-out duration-500 delay-300 ml-[15px]">
            <a href={twitter} className="w-[26px] h-[26px] transition-all rounded-full bg-[#FFF6F0] flex items-center justify-center hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-[#494949] hover:text-[#3B5998]">
              <TwitterSvg />
            </a>
          </li>
          <li
            className="translate-y-[30px] group-hover:translate-y-[0] transition ease-in-out duration-700 delay-300 ml-[15px]">
            <a href={ins} className="w-[26px] h-[26px] transition-all rounded-full bg-[#FFF6F0] flex items-center justify-center hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-[#494949] hover:text-[#3B5998]">
              <InsSvg />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
