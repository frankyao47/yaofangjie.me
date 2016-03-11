var koa = require('koa');
var router = require('koa-router')();

router
    .get('/', function *(next) {
        this.body = 'Under construction';
    })
    .get('/:query', function *(next) {
        this.body = 'Hello, your query string is ' + this.params.query;
    })

var app = koa();

app.name = 'yaofangjie.me';
app.env = 'development';

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);