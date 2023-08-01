import classnames from "classnames";

export default function PackagesPage() {

  return(
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 text-center'>
          <div className='col-span-12'>
            <div className='mx-auto'>
              <span className='text-tiny text-secondary inline-block mb-2'>Packages</span>
              <h2 className='capitalize text-[24px] sm:text-[30px] xl:text-4xl text-primary mb-8'>
                Select Your Package<span className='text-secondary'>.</span>
              </h2>

              <input type='radio'/>

            </div>
          </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-x-[30px]'>
          <div></div>

        </div>
      </div>
    </section>
  )
}

interface PackagesCardProps {
  inverted: boolean;
}

const PackagesCard = (props: PackagesCardProps) => {

  const {
    inverted,
  } = props;

  const wrapperClassName = classnames('p-[20px] lg:p-[40px] rounded-[10px]',{
    'bg-[#F5F9F8]': inverted,
    'bg-primary': !inverted,
  })

  return(
    <div className={wrapperClassName}>

    </div>
  )
}
