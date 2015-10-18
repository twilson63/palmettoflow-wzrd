# Palmetto Flow Wzrd

This project is inspired from `wzrd` a browserify server that will automatically browserify your client code base as well as run a web server to serve static content.

This `wzrd` is a bit more opinionated.

## usage

```
mkdir config
echo "{}" >> config/common.json

json -I -f config/common.json -e 'this.adapter = "palmettoflow-nodejs"'
json -I -f config/common.json -e 'this.palmetto = {"endpoint": "", "app": ""}'

npm i [palmettoflow adapter]

touch app.js
mkdir www

npm i pwzrd -g
pwzrd app.js
```

This server is made specifically for connecting to palmetto flow services and exposing an endpoint so that client applications can connect to those services via their web server.

The idea is to do everythig a nodejs server would be doing as well as interacting with palmetto flow via a commit log.

