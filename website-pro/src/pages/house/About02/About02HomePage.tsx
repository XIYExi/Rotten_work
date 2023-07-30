
interface About02HomePageProps {
  title: string;
  meta: string;
  desc: string;
}


export default function About02HomePage(props: About02HomePageProps) {


  return(
    <section className="about02-bg bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center
    relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]">
      <div className="my-container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="max-w-[480px]  mx-auto text-center text-white relative z-10">
              <div className="mb-5">
                <span className="text-base block">{props.meta}</span>
              </div>
              <h1 className="font-recoleta text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-7xl">
                {props.title}
              </h1>
              <p className="text-base mt-5">
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
