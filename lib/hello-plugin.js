'use strict';

module.exports.register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
      reply({message:"Hello Electrode Server!"});
    }
  });

  next();
};

module.exports.register.attributes = {
  name: 'helloPlugin',
  version: '1.0.0'
};

