import React, { ReactNode } from 'react';
import homeIcon from '@/assets/home-service-icon.png';
import { IsPassed, JudgeAttr } from '@/absolute/tool/test-tools';

interface TagComponentProps {
  src: string;
  tagNode?:ReactNode;
  children: ReactNode;
  className?:string;
}

export default function TagComponent(props: TagComponentProps) {

  const {
    className,
    tagNode,
    src = '',
    children
  } = props;

  return (
    <div className={`flex ${className}`}>
      {
        /*tagNode为ReactNode类型，src为string，如果tagNode被传递那么可以直接使用，否则使用默认得img*/
        JudgeAttr(
          tagNode,
          <img className='w-7 h-7' src={src}/>
        )
      }
      <div className='pl-3 pb-2'>{children}</div>
    </div>
  )
}
