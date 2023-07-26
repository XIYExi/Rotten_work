/**
 * @Description: Home01 和 Home02 的入口页面
 * @Author: xiye
 * @date: 2023/7/26
 */
import { IRouteProps } from 'umi';
import HeaderComponent from '@/pages/house/components/Header';
import './house.less';
import FooterComponent from '@/pages/house/components/Footer';
import OwnerInputComponent from "@/pages/house/components/OwnerInput";
import 'swiper/swiper.css';

export default function IndexPage({children}: IRouteProps) {
  return (
    <div className='overflow-x-hidden'>
      <HeaderComponent />
      {children}
      <OwnerInputComponent />
      <FooterComponent />
    </div>
  );
}
