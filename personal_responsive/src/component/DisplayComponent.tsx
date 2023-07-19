import React, { CSSProperties, ReactNode } from 'react';
import { JudgeAttr } from '@/absolute/tool/test-tools';

interface DisplayComponentProps{
  src?:string;
  tagNode?:ReactNode;
  title?:string;
  desc?:string;
  className?:string;
  style?:CSSProperties;
}

const DisplayComponent = (props: DisplayComponentProps) => {

  const {src, tagNode,title,desc, className, style} = props;

  return(
    <div className={className} style={style}>
      {
        JudgeAttr(tagNode, <img className='mb-6' src={src}/>)
      }
      <div className='text-xl font-bold mb-6'>{title}</div>
      <div className='text-desc text-gray-500 leading-8 opacity-50'>{desc}</div>
    </div>
  )
}

export default DisplayComponent;
