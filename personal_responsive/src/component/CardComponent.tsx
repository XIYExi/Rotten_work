import React, { CSSProperties, ReactNode } from 'react';
import { JudgeAttr } from '@/absolute/tool/test-tools';
import ButtonComponent from '@/component/ButtonComponent';

interface CardComponentProps {
  children?:ReactNode;
  className?:string;
  style?:CSSProperties;
  onClick?:any;
  title?:ReactNode;
  src?:string;
  tagNode?:ReactNode;
  btnText?:ReactNode;
  imgCenter?:boolean;
}

export default function CardComponent(props:CardComponentProps) {

  const {
    children,
    className,
    style,
    onClick,
    title,
    src='',
    tagNode,
    btnText,
    imgCenter=false,
  } = props;

  const handleClick = () => {
    console.log('card!')
    onClick && onClick();
  }

  return(
    <div className={className} style={style}>
      {
        JudgeAttr(
          tagNode,
          <img className={`w-16 h-16 ${imgCenter &&'mx-auto'}`} src={src}/>
        )
      }
      <div className='text-2xl text-bold mt-8'>{title}</div>
      <div className='text-sm text-gray-500 opacity-50 mt-4 leading-8'>{children}</div>

      {
        btnText && <div className='mt-4 text-thin'>
          <a onClick={handleClick}>{btnText}</a>
        </div>
      }

    </div>
  )
}
