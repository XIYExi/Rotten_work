import {v4 as uuid} from 'uuid';
import img1 from '../../../assets/images/features/features5-img1.png';
import img2 from '../../../assets/images/features/features5-img2.png';

const data = [
    {
        id: uuid(),
        category: 'wrapper',
        title: {
            text: 'Awesome Landing Template'
        },
        desc: {
            text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.'
        }
    },
    {
        id: uuid(),
        category: 'grid',
        child: [
            {
                id: uuid(),
                category: 'wrapper',
                image: img1,
                title: {
                    text: 'Based on Bootstrap 4'
                },
                desc: {
                    text: 'Layout is based on one of the most common and reliable Bootstrap'
                },
            },
            {
                id: uuid(),
                category: 'wrapper',
                image: img2,
                title: {
                    text: 'Sketch & Figma'
                },
                desc: {
                    text: 'The template designs and works perfectly  in Sketch and Figma'
                },
            }
        ]
    }
]


export default data;
