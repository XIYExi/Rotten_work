import features1 from './features1/data';
import features2 from './features2/data';
import features3 from './features3/data';
import features4 from './features4/data';
import features5 from './features5/data';
import features6 from './features6/data';
import features7 from './features7/data';

const featuresTemplate = [
    features1,
    features2,
    features3,
    features4,
    features5,
    features6,
    features7,
]

const data =featuresTemplate.map((v, index) => {
    return {...v, category: `features${index + 1}`}
})

export default data;
