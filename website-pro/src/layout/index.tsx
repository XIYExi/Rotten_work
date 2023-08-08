import React from 'react';
import { IRouteProps } from 'umi';

export default function LayoutIndex({children}: IRouteProps) {

  return (
    <>
      <div className='justify-end'>
        <a href='/house'>house</a>
      </div>
    </>
  )
}
