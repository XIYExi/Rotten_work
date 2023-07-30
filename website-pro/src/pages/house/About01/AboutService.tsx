import service1 from '@/assets/image/service/service1.png';
import service2 from '@/assets/image/service/service2.png';
import service3 from '@/assets/image/service/service3.png';
import service4 from '@/assets/image/service/service4.png';



export default function AboutServicePage() {

  return(
    <section className='pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>

        <div className='grid grid-cols-12 text-center mb-[30px] lg:mb-[60px]'>
            <span className='col-span-12 text-tiny text-secondary inline-block mb-2'>Our Service</span>
            <h2 className='font-recoleta capitalize col-span-12 text-[24px] sm:text-[30px] xl:text-4xl text-primary mb-3'>
              Services That We Provide<span className='text-secondary'>.</span>
            </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-[30px]'>
          <ServiceCard
            src={service1}
            title='Sale Property'
            desc='Provide prorpery Sale options opportunity to find the best'
          />
          <ServiceCard
            src={service2}
            title='Buy Property'
            desc='Provide prorpery Sale options opportunity to find the best'
          />
          <ServiceCard
            src={service3}
            title='Rent Property'
            desc='Provide prorpery Sale options opportunity to find the best'
          />
          <ServiceCard
            src={service4}
            title='Mortgage'
            desc='Provide prorpery Sale options opportunity to find the best'
          />

        </div>

      </div>
    </section>
  )
}

interface ServiceCardProps {
  src: string;
  title: string;
  desc: string;
}

const ServiceCard = (props: ServiceCardProps) => (
  <div className='relative group'>
    <a href='#' className='block'>
      <img className='w-full h-full block mx-auto rounded-tr-[6px] rounded-tl-[6px]'
           loading='lazy' width='270' height='290' alt={props.title} src={props.src}
      />
      <div className='drop-shadow-md hover:drop-shadow-xl bg-[#FFFDFC] rounded-br-[6px] rounded-bl-[6px] px-[25px] py-[25px]'>
        <h3 className='font-recoleta font-normal text-[24px] xl:text-[30px] text-primary group-hover:text-secondary transition-all mb-[5px]'>
          {props.title}<span className='text-secondary'>.</span>
        </h3>
        <p className='font-light text-tiny'>
          {props.desc}
        </p>
      </div>
    </a>
  </div>
)
