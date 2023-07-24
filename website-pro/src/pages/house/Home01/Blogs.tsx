/**
 * @Description: Our Blogs页面
 * @Author: xiye
 * @date: 2023/7/24
 */
import React, {useEffect, useState} from "react";
import {ReactComponent as JumpSvg} from "@/assets/image/blog/jump.svg";
import home1 from '@/assets/image/blog/post1.png';
import home2 from '@/assets/image/blog/post2.png';

export default function BlogsPage() {

  const [data, setData] = useState<BlogCardProps[]>([]);
  useEffect(() => {
    (async () => {
      const {default:Graph} = await import('@/assets/data/BlogsData');
      setData(Graph.Blogs);
    })()
  }, [])

  return (
    <section className='relative'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px] items-center' style={{marginBottom:'-30px'}}>
          <div className='col-span-12 lg:col-span-4 mb-[30px]'>
            <div className="xl:pr-[20px]">
              <span className="text-secondary text-tiny capitalize inline-block mb-[15px]">Our Blog</span>
              <h2
                className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-4xl capitalize mb-[15px]">
                Always Check our Latest Blog Post<span className="text-secondary">.</span>
              </h2>
              <p className='font-thin'>
                Huge number of propreties availabe here for buy,sell and Rent. Also you find here
                co-living property so lots opportunity you have choose and enjoy huge discount.
              </p>
              <a href='#' className="flex flex-wrap items-center text-secondary text-tiny mt-[20px]">
                View all Post
                <JumpSvg />
              </a>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-8 mb-[30px]'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] mb-[30px]'>
              {
                data.map((item:BlogCardProps, index:number) => (
                  <BlogCard
                    key={index}
                    href={item.href}
                    src={item.src}
                    meta={item.meta}
                    title={item.title}
                    desc={item.desc}
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


export interface BlogCardProps {
  href: string;
  src: string;
  meta: string;
  title: string;
  desc:string;
}

export const BlogCard = (props: BlogCardProps) => {

  const {
    href,
    src,
    meta,
    title,
    desc,
  } = props;


  return(
    <div className="mb-[30px]">
      <a href={href} className="block overflow-hidden rounded-[6px] mb-[30px]">
        <img className="w-full h-full" src={src === '1' && home1 || home2} width="370" height="270" loading="lazy"
             alt="Tip’s about Real Estate Recent Conditions from Agent."/>
      </a>
      <div>
          <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2 before:bg-secondary before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full pl-[10px]">
            {meta}
          </span>
        <h3>
          <a href={href} className="font-recoleta text-[22px] xl:text-[28px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all">
            {title}</a>
        </h3>
        <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
          {desc}
        </p>
      </div>
    </div>
  )
}
