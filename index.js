'use strict';

var fs = require('fs'),
    http = require('http'),
    path = require('path');

const { Manager } = require('sqler');
const mgrConf = require('./db/sqler.json');
let dbMgr, svc;

var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({
  strict: false
}));
const multer = require('multer');
const upload = multer();
app.use(upload.any());

var oasTools = require('oas-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

var spec = fs.readFileSync(path.join(__dirname, '/api/oas-doc.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);

var options_object = {
  controllers: path.join(__dirname, './controllers'),
  loglevel: 'info',
  strict: false,
  router: true,
  validator: true
};

app.get('/info', function(req, res) {
  res.send({
    info: "This API was generated using oas-generator!",
    name: oasDoc.info.title
  });
});

(async () => {
  // init DB(s)
  dbMgr = new Manager(mgrConf);
  await dbMgr.init();

  svc = {
    manager: dbMgr,
  };

  // service middleware
  app.use('/', (req, res, next) => {
    req.svc = svc;
    next();
  });

  oasTools.configure(options_object);
  oasTools.initialize(oasDoc, app, function() {
  
    http.createServer(app).listen(serverPort, function() {
      console.log("App running at http://localhost:" + serverPort);
      console.log("________________________________________________________________");
      if (options_object.docs !== false) {
        console.log('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
        console.log("________________________________________________________________");
      }
    });
  });
})();
