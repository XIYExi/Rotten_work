import about01 from '@/assets/image/about/image1.png';
import about02 from '@/assets/image/about/image2.png';
import about03 from '@/assets/image/about/image3.png';
import doller from '@/assets/image/icon/doller.png';
import location from '@/assets/image/icon/location.png';
import trusted from '@/assets/image/icon/trusted.png';


export default function Since02Page() {

  return(
    <section className='pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[15px] sm:gap-x-[20px] mb-[-40px]'>
          <div className='col-span-12 md:col-span-5 lg:col-span-5 mb-[40px]'>
            <img className='w-full h-full rounded-[6px]' src={about01} loading='lazy' width='470' height='370' alt='about image'/>
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-7 xl:px-[50px] mb-[40px]'>
            <span className="text-secondary text-tiny inline-block mb-2">Since 1975</span>
            <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.388] xl:text-[35px] capitalize mb-[15px] lg:mb-[50px]">
              We Provide Right Choice of Properties that You need and have great opportunity to choose
              from thousands of Collection <span className="text-secondary">.</span>
            </h2>

            <ul className="flex flex-wrap list-none">
              <li className="block">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>20</span>
                  <span>k+</span>
                </span>
                <p>Properties</p>
              </li>
              <li className="block pl-[40px] md:pl-[60px]">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>12</span>
                  <span>k+</span>
                </span>
                <p>Customers</p>
              </li>
              <li className="block pl-[40px] md:pl-[60px]">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>160</span>
                  <span>+</span>
                </span>
                <p>Awards Win</p>
              </li>
            </ul>
          </div>

          <div className='col-span-12 md:col-span-12 lg:col-span-5 mb-[40px]'>
            <div className="-mb-5 xl:-mb-10 mt-0 xl:mt-[35px]">
              <div className="flex flex-wrap mb-5 xl:mb-10">
                <img src={doller} className="self-start mr-5" loading="lazy" alt="about Image" width="50" height="50" />
                <div className="flex-1">
                  <h3 className="font-recoleta text-primary text-[22px] xl:text-2xl capitalize mb-2">
                    Budget Friendly
                  </h3>
                  <p className="max-w-[340px] font-thin">
                    Properties are most budget friendly so you have opportunity to find the best one
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mb-5 xl:mb-10">
                <img src={location} className="self-start mr-5" loading="lazy" alt="about Image" width="50" height="50"/>
                <div className="flex-1">
                  <h3 className="font-recoleta text-primary text-[22px] xl:text-2xl capitalize mb-2">
                    Prime Location
                  </h3>
                  <p className="max-w-[340px] font-thin">
                    Properties are most budget friendly so you have opportunity to find the best one
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mb-5 xl:mb-10">
                <img src={trusted} className="self-start mr-5" loading="lazy" alt="about Image" width="50" height="50" />
                <div className="flex-1">
                  <h3 className="font-recoleta text-primary text-[22px] xl:text-2xl capitalize mb-2">
                    Trusted by Thousand
                  </h3>
                  <p className="max-w-[340px] font-thin">
                    Properties are most budget friendly so you have opportunity to find the best one
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className='col-span-7 lg:col-span-4 mb-[40px]'>
            <img className="w-full h-full rounded-[6px]" src={about02} loading="lazy" width="350" height="420" alt="about image"/>
          </div>
          <div className='col-span-5 lg:col-span-3 mb-[40px]'>
            <img className="w-full h-full rounded-[6px]" src={about03} loading="lazy" width="300" height="420" alt="about image"/>
          </div>

        </div>
      </div>
    </section>
  )
}
