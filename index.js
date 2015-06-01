var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: process.env.PORT || 8000,
    routes: {
      cors: true
    }
});

app.routes(server);

var plugins = [
	{ register: require('./routes/users.js')},
  { register: require('./routes/sessions.js')},
  { register: require('./routes/topics.js')},
  { register: require('./routes/data.js')},
  { register: require('./routes/logs.js')},
  { 
    register: require('hapi-mongodb'),
    options: {
      'url' : process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/hashtopics',
      'settings' : {
        'db': {
          'native_parser': true
        }
      }
    }
  },
  {
    register: require('yar'),
    options: {
      cookieOptions: {
        password: 'password',
        isSecure: false
      }
    }
  }
];

server.register(plugins, function(err) {
  if (err) { throw err; }

  server.start(function() {
    console.log('info', 'Server running at: ' + server.info.uri);
  })
})