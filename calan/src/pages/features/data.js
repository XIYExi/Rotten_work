import features1 from './features1/data';
import features2 from './features2/data';

const featuresTemplate = [
    features1,
    features2,
]

const data =featuresTemplate.map((v, index) => {
    return {...v, category: `features${index + 1}`}
})

export default data;
