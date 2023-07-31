import image1 from '@/assets/image/contact/image.png';

export default function LoginPage() {

  return(
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px]'>
          <div className='col-span-12 lg:col-span-6'>
            <h3 className='text-[24px] capitalize sm:text-[30px] text-primary xl:text-4xl mb-[25px]'>
              Login to Bary<span className='text-secondary'>.</span>
            </h3>
            <p className='font-thin max-w-[465px] mb-[50px]'>
              Huge number of propreties availabe here for buy,sell and Rent. Also you find here co-living property,lots opportunity you have to choose here and enjoy huge discount you can get.
            </p>

            <div className='relative'>
              <form action='#'>
                <div className='grid grid-cols-12 gap-x-[20px] gap-y-[35px]'>
                  <div className='col-span-12'>
                    <input className="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                      type="text" placeholder="Username" />
                  </div>

                  <div className='col-span-12'>
                    <input className="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder="Password" />
                    <div className='flex flex-wrap items-center justify-between w-full sm:w-[400px] mt-[15px]'>
                      <div className='flex flex-wrap items-center'>
                        <input type='checkbox' id='checkbox1' name='Remember me'/>
                        <label htmlFor='checkbox1' className='ml-[5px] cursor-pointer text-[14px]'>Remember me</label>
                        <br/>
                      </div>
                      <a href='#' className='hover:text-secondary text-[14px] block'>
                        Forget Password
                      </a>
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="flex flex-wrap items-center">
                      <button
                        type="submit"
                        className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0
                        before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all
                        leading-none px-[40px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute
                        after:inset-0 index-modify after:bg-primary after:rounded-md after:transition-all"
                      >
                        Login
                      </button>
                      <a href="/bery/pages/register" className="font-medium text-primary hover:text-secondary ml-[40px]">Register</a>
                    </div>
                  </div>

                </div>
              </form>
            </div>

          </div>

          <div className='col-span-12 lg:col-span-6'>
            <img src={image1}
                 className="w-full h-auto rounded-[10px]" width="546" height="478" alt="image" />
          </div>
        </div>
      </div>
    </section>
  )
}
