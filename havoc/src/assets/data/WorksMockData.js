import img1 from '../image/works/img1.png';
import img2 from '../image/works/img2.png';
import img3 from '../image/works/img3.png';
import img4 from '../image/works/img4.png';
import img5 from '../image/works/img5.png';
import img6 from '../image/works/img6.png';
import img7 from '../image/works/img7.png';
import img8 from '../image/works/img8.png';
import img9 from '../image/works/img9.png';
import img10 from '../image/works/img10.png';


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const titles = [
    'Vrai Corportae Branding and Packaging',
]


export const mockGenerateFunc = (type) => {
    const arr = [];
    for(let i = 0;i < 10; ++i){
        const temp = {};
        temp.src = images[Math.floor(Math.random() * 10)];
        temp.title = titles[0];
        temp.href = '#';
        temp.belong = type;
        temp.id = 'id-';
        arr.push(temp);
    }
    return arr;
}


