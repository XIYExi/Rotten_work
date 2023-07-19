import React, { CSSProperties, ReactNode } from 'react';
import { JudgeAttr } from '@/absolute/tool/test-tools';
import classNames from 'classnames';

interface BigTagComponentProps{
  src?:string;
  tagNode?:ReactNode;
  title:string;
  className?:string;
  style?:CSSProperties;
}

export default function BigTagComponent({src='', tagNode, title, className, style}: BigTagComponentProps){

  const classes = classNames('flex p-1', className);

  return(
    <div className={classes} style={style}>
      {
        JudgeAttr(tagNode,
          <img className='w-16 h-16' src={src}/>
        )
      }
      <div className='pl-6'>
        <div className='font-thin text-lg text-gray-500 mb-6'>{title}</div>
      </div>
    </div>
  )
}
