

export default function CardComponent(props) {

    const {src, title, meta, href} = props;

    return(
        <div className='px-4 md:pb-[100px]'>
            <img width={550} height={560} alt={title} src={src} loading='lazy'/>
            <div className='font-thin text-[14px] mb-4'>{meta}</div>
            <h2 className='text-[28px] font-[600]'>{title}</h2>
        </div>
    )
}

CardComponent.prototype = {
    src: String,
}