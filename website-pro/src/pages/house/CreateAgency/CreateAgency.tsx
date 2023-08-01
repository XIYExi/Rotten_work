
export default function CreateAgencyPage() {


  return(
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='relative'>
              <form action='#'>
                <div className='grid grid-cols-12 gap-x-[20px] gap-y-[35px]'>
                  <div className='col-span-12'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Agency Title' id='c-input-title'/>
                  </div>

                  <div className='col-span-12'>
                    <textarea className="h-[196px] xl:h-[485px] font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md resize-none"
                      name="textarea" id="c-textarea-desc" cols={30} rows={10} placeholder="Description"/>
                  </div>

                  <div className='col-span-12'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Address line1' id='c-input-address1'/>
                  </div>

                  <div className='col-span-12'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Address line2' id='c-input-address2'/>
                  </div>

                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='City' id='c-input-city'/>
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Zip code' id='c-input-zip'/>
                  </div>

                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Phone' id='c-input-phone'/>
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Email' id='c-input-email'/>
                  </div>

                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Number of Agent' id='c-input-numberOfAgent'/>
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-md "
                           type="text" placeholder='Website' id='c-input-website'/>
                  </div>

                  <div className='col-span-12'>
                    <button
                      type="submit"
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0
                       before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all
                       leading-none px-[30px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block
                        after:absolute after:inset-0 index-modify after:bg-primary after:rounded-md after:transition-all"
                    >
                      create agency
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
