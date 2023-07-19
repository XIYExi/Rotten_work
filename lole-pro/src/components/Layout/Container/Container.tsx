import React, {CSSProperties, FC, ReactNode, useEffect} from 'react';
import {centered} from "@/absolute/design/position";
import classnames from 'classnames';
import {ContainerPX} from "@/style/padding";
import {IsPassed} from "@/absolute/tool/test-tools";

interface Container {

  className?:string;
  style?:CSSProperties;
  children?:ReactNode;
  /**
   * 是否居中
   */
  centered?: boolean;
  /**
   * 左右padding距离
   * tiny - px-3 0.75rem 12px
   * small - px-6 1.5rem 25px
   * medium - px-12 3rem 48px
   * big - px-24 7rem 112px
   * large - px-40 10rem 160px
   */
  edge?: 'tiny' | 'small' | 'medium' | 'big' | 'large',

}

const Container:FC<any> = (props) => {

  const {
    className,
    style,
    children,
    center = true,
    edge,
  } = props;

  useEffect(() => {



  }, [edge])


  const containerClass = classnames(
    'container',
    centered(center),
    IsPassed(edge) && ContainerPX[edge as keyof typeof ContainerPX],
    className,
  )

  return(
    <div className={containerClass} style={style}>
      {
        children
      }
    </div>
  )
}

export default Container;
