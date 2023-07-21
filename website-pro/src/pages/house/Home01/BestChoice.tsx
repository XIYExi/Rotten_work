/**
 * @Description: 最佳推荐
 * @Author: xiye
 * @date: 2023/7/21
 */
import React, {Fragment} from "react";

export default function BestChoicePage() {

  return (
    <section>
      <div>Best Choice</div>
      <div className='flex flex-wrap'>
        <div >Popular Properties</div>
        <div>Explore all</div>
      </div>

      <div>

      </div>

    </section>
  )
}

interface CardProps {
  src:string;
  title:string;
  address: string;
  date: string;
  price: number;
  meta:string;
}

const Card = (props: CardProps) => {

  const {
    src,
    title,
    address,
    date,
    price,
    meta
  } = props;

  return(
    <Fragment>

      <div>
        <div className='text-center'>
          <img src={src} />
          <div>{title}</div>
          <div >{address}</div>
          <div>Added: {date}</div>
          <div>Price:${price}</div>
          <div>{meta}</div>

        </div>
      </div>
    </Fragment>
  )
}
