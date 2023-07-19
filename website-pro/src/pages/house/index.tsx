import { IRouteProps } from 'umi';
import HeaderComponent from '@/pages/house/Header';
import './house.less';
import FooterComponent from '@/pages/house/Footer';

export default function IndexPage({children}: IRouteProps) {
  return (
    <div className='overflow-x-hidden'>
      <HeaderComponent />
      {children}
      <div style={{width:'100%',height:'100dvh'}}/>
      <FooterComponent />
    </div>
  );
}
