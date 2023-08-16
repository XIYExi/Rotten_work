const Koa = require('koa');
const app = new Koa();

const serve = require('koa-static');
app.use(serve('../'))


app.listen(4000, () => {
    console.log(`koa test server start in port: ${4000}`);
})
