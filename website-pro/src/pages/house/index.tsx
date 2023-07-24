import { IRouteProps } from 'umi';
import HeaderComponent from '@/pages/house/Header';
import './house.less';
import FooterComponent from '@/pages/house/Footer';
import OwnerInputComponent from "@/pages/house/OwnerInput";
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
