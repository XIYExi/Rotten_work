import React, { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import { IsPassed, ComposeSuffix } from '@/absolute/tool/test-tools';

interface ButtonComponentProps {
  borderColor?: string;
  hoverColor?:string;
  hoverFontColor?:string;
  backgroundColor?: string;
  className?: string;
  border?: boolean;
  children?:ReactNode;
  onClick?:any;
}

const ButtonComponent = (props: ButtonComponentProps) => {

  const {
    border=true,
    backgroundColor,
    borderColor,
    hoverColor,
    hoverFontColor,
    className,
    children,
    onClick
  } = props;

  const handleClick = (e: any) => {
    onClick && onClick(e);
  }


  const buttonClassName = classNames('py-2 px-8',
    {
      'border': border
    },
    ComposeSuffix('bg', backgroundColor),
    ComposeSuffix('border', !IsPassed(borderColor) && 'white' || borderColor),
    ComposeSuffix('bg', !IsPassed(hoverColor) && 'white' || hoverColor, 'hover'),
    ComposeSuffix('text', !IsPassed(hoverFontColor) && 'black' || hoverFontColor, 'hover'),
    className
  )

  return (
    <div>
      <a onClick={e => handleClick(e)} className={buttonClassName}>{children}</a>
    </div>
  )
}

export default ButtonComponent;
