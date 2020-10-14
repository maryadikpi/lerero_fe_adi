// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//app.use(bodyParser.json());
app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // if (pathname === '/a') {
    //   app.render(req, res, '/a', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/b', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
    // res.setHeader('Content-Type', 'application/json');
    handle(req, res, parsedUrl)
  }).listen({port: 80, exclusive: true})
})