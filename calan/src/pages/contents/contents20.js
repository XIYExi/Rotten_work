import styled from "styled-components";
import img1 from '../../assets/images/contents/contents20-img1.png';
import img2 from '../../assets/images/contents/contents20-img2.png';
import img3 from '../../assets/images/contents/contents20-img3.png';
import img4 from '../../assets/images/contents/contents20-img4.png';


export default function ContentComponent20(){

    return(
        <div className='mx-auto relative w-full lg:px-[165px] lg:py-[80px]'>

            <div className='grid grid-cols-12 gap-x-[30px]'>

                <div className='col-span-4'>
                    <img src={img1} alt='contents20-img1' className='rounded-[32px]'/>
                </div>

                <div className='col-span-4'>
                    <img src={img2} alt='contents20-img2' className='rounded-[32px] mb-[30px]'/>
                    <img src={img3} alt='contents20-img3' className='rounded-[32px]'/>
                </div>

                <div className='col-span-4'>
                    <img src={img4} alt='contents20-img4' className='rounded-[32px]'/>
                </div>

            </div>

        </div>
    )
}
