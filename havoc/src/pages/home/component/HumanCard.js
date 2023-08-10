

export default function HumanCardComponent(props) {

    const {src, href, title, desc} = props;

    return(
        <div>
            <img src={src} alt={title} className='mb-[16px]' width={250} height={250} loading='lazy'/>
            <div className='text-[14px] md:text-[24px] font-[600] md:font-[500] mb-[6px]'>{title}</div>
            <div className='font-thin text-[#7B7B7B] text-[10px] md:text-[14px]'>{desc}</div>
        </div>
    )
}
