import mockjs from 'mockjs';
const Random = require('mockjs').Random;

export default {
  'GET /home/box': mockjs.mock({
    success: true,
    'data|6': [
      {
        image: Random.image("100x100"),
        title: '@name',
        desc: '@sentence(20,30)'
      }
    ]
  })
}
