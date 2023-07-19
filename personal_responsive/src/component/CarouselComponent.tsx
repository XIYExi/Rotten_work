import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import './CarouselComponent.less';

interface CarouselItemProps {
  src?: string;
  tagNode?: ReactNode;
  title?: string;
  meta?:string;
}

interface CarouselComponentProps {
  data: CarouselItemProps[];
  autoplay?: boolean;
  duration?:number;
  children?:ReactNode;
  style?:CSSProperties;
  className?:string;
}

interface CarouselRef {
  goTo: (slide: number) => void;
  next: () => void;
  prev: () => void;
}
const CarouselComponent = forwardRef<CarouselRef, CarouselComponentProps>(
  ({
     duration = 0,
     className,
     style,
     data,
   },
   ref)=> {

    const [current, setCurrent] = useState<number>(1)
    const [transitionTime, setTransitionTime] = useState<boolean>(true)
    const [isTransitionRunning, setIsTransitionRunning] = useState<boolean>(false)

    const carouselContainerRef = useRef<HTMLDivElement>(null)
    const currentRef = useRef(0)
    let autoTimer = useRef<NodeJS.Timeout>()

    const classes = classNames('carousel', className);
    const wrapper_classes = classNames('carousel-wrapper', {
      "transitionTime": transitionTime
    })

    const cloneNode = useCallback(() => {
      const nodeList: HTMLElement[] = [];
      const containerRef = (carouselContainerRef.current as HTMLDivElement);
      containerRef.childNodes.forEach(node => {
        if (node.nodeType === 1) {
          const eleNode = node as HTMLElement
          nodeList.push(eleNode)
        }
      });
      containerRef.append(nodeList[0].cloneNode(true));
      containerRef.prepend(nodeList[nodeList.length - 1].cloneNode(true));
    }, [carouselContainerRef.current])

    const goto = useCallback((target: number) => {
      //console.log('target',target)
      if (data) {
        //let width:string = (loleCarouselContainerRef.current as HTMLDivElement).style.width;
        //`translateX(${- width * (100 / ((children as any).length + 2)) * target}%)`
        (carouselContainerRef.current as HTMLDivElement).style.transform = `translateX(${-100 * target}%)`;

      }
    }, [])

    useImperativeHandle(ref, () => ({
      goTo: (number) => {goto(number)},
      next: () => {goto(currentRef.current + 1)},
      prev: () => {goto(currentRef.current - 1)}
    }));

    useEffect(() => {
      cloneNode(); // 11231
      goto(1);
      const containerRef = (carouselContainerRef.current as HTMLDivElement);
      containerRef.addEventListener('transitionend', judgeExitTransition);
      containerRef.addEventListener('transitionrun', judgeTransitionRun);
      return () => {
        containerRef.removeEventListener('transitionend', judgeExitTransition);
        containerRef.removeEventListener('transitionrun', judgeTransitionRun);
      }
    }, [])

    const judgeExitTransition = useCallback(() => {
      let afterIndex = currentRef.current // 0
      // 11231
      if (currentRef.current > (data as any).length) {
        afterIndex = 1;
      }

      setIsTransitionRunning(false)
      if ((currentRef.current >= (data as any).length + 1) || (currentRef.current === 0)) {
        setTransitionTime(false)
      }
    }, [])

    useEffect(() => {
      duration !== 0 && autoPlay()
      return () => { autoTimer.current && duration !== 0 && clearInterval(autoTimer.current) }
    }, [])

    useEffect(() => {
      if (!data) return;
      currentRef.current = current;
      goto(current);
      if (current === 2 || current >= (data as any).length - 1) {
        setTransitionTime(true)
      }
    }, [current])

    const autoPlay = useCallback(() => {
      if (duration !== 0) {
        autoTimer.current = setInterval(() => {
          setCurrent(_ => _ + 1)
        }, duration)
      }
    }, [])

    const judgeTransitionRun = useCallback(() => {
      setIsTransitionRunning(true)
    }, [])

    return(
      <div className={classes} style={style} >


        <div className={wrapper_classes} ref={carouselContainerRef}>
          {
            data.map((item) => (
              <div className='flex'>
                <img className='w-12' src={item.src}/>
                <div className='ml-6'>
                  <div className='font-bold'>{item.title}</div>
                  <div className='font-thin text-gray-500 opacity-50'>{item.meta}</div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='p-6'>
          <button className='m-3'>+</button>
          <button className='m-3'>-</button>
        </div>
      </div>
    )
  });

export default CarouselComponent;
