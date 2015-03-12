'use strict';

var Hapi = require('hapi');

var pkg = require('../package.json');

var server = new Hapi.Server();
server.connection({ port: 8000 });

server.route({
  method: 'GET',
  path: '/version',
  handler: function (request, reply) {
    reply({
      version: pkg.version
    });
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
