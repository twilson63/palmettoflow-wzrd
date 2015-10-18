var fetchConfig = require('zero-config')
var config = fetchConfig('.', { dcValue: 'us-east-1'})

var palmetto = require(config.get('adapter'))
var ee = palmetto(config.get('palmetto'))

var http = require('http')
var ecstatic = require('ecstatic')
// add browserify stuff here like wzrd

// add palmetto flow api route
var par = require('palmettoflow-api-route')
var palmettoRoute = par({ timeout: 2000 }, ee)

var server = http.createServer(function (req, res) {
  if (req.url === '/api' && req.method === 'POST') {
    return palmettoRoute(req, res)
  }
  // do broserify stuff here
  ecstatic('www')(req, res)
})

server.listen(process.env.PORT || 1337)