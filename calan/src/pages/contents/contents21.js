import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';
import poster from '../../assets/images/contents/contents21-poster.png';


export default function ContentComponent21(){

    return(
        <div className='relative w-full mx-auto lg:px-[165px] lg:py-[80px]'>

            <Player
                className='mx-auto'
                fluid={false}
                width={1110}
                height={624}
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
                <BigPlayButton position="center" />
            </Player>

        </div>
    )
}
