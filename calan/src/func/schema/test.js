const {v4} = require('uuid');
const data = v4()
// console.log(data.length)

const hex = 'rgba(255,255,120,100)';
const reg = /#.{6}|rgb\(\d{0,3},\d{0,3},\d{0,3}\)|rgba\(\d{0,3},\d{0,3},\d{0,3},\d{0,3}\)/
//console.log(reg.test(hex))

const options = require('./TitleSchema');
// console.log(options.properties.lg)
const Ajv = require('ajv');
const ajv = new Ajv();

const _title = {
    id: data,
    category: 'title',
    lg: {
        $bgColor: '#FFFF22',
        $bgImage: 'urlssss',
        $align: 'center',
        $m: 20
    },
    title: 2
}
let valid = ajv.validate(options, _title);
console.log(valid)



