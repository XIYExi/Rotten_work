import poster from "../../assets/images/contents/contents22-poster.png";
import {BigPlayButton, Player} from "video-react";
import 'video-react/dist/video-react.css';

export default function ContentComponent22(){

    return(
        <div className='mx-auto relative w-full h-screen'>
            <Player
                className='mx-auto'
                fluid={true}
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
                <BigPlayButton position="center" />
            </Player>
        </div>
    )
}
