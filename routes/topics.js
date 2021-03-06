// routes/topics.js
var Joi = require('joi');
var Auth = require('./auth');

exports.register = function(server, options, next) {
	//include routes
	server.route([
			//Retrieve all topics
		{
			method:'GET',
			path: '/topics',
			handler: function(request, reply) {
				var db = request.server.plugins['hapi-mongodb'].db;

				db.collection('topics').find().toArray(function(err, topics) {
					if (err) {
						return reply('Internal MongoDB error', err);
					}

					reply(topics);
				});
			}
		},
		//post a topic
		{
			method: 'POST',
			path: '/topics',
			config: {
				handler: function(request, reply) {
					var db = request.server.plugins['hapi-mongodb'].db;
    			var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

					Auth.authenticated(request, function(result) {
						if (result.authenticated === true) {
		    			var session = request.session.get('hashtopics_session');
							console.log(request.session);
		    			db.collection('users').findOne({ "_id": ObjectID(session.user_id) }, function(err, user) {

			    			var topic = {
			    				"titles": request.payload.topic.titles,
			    				"message": request.payload.topic.message,
			    				"user_id": ObjectID(session.user_id),
			    				"username": user.username
			    			};
	        			db.collection('topics').insert(topic, function(err, writeResult) {
	        				reply(writeResult);
	        			})
	        		});
						} else {
							reply(result.message);
						}
					});
				},
				validate: {
					payload: {
						topic: {
							message: Joi.string().max(455).required(),
							titles: Joi.required()
						}
					}
				}
				
			}
		},
		//get a random topic
    {
      method: 'GET',
      path: '/topics/random',
      handler: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;
        db.collection('topics').find().toArray(function(err, result){
          if (err) throw err;
          var randomIndex = Math.floor(Math.random() * result.length);
          reply(result[randomIndex]);
        })
      }
    },
    //get 12 random topics
    {
      method: 'GET',
      path: '/topics/12random',
      handler: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;
        db.collection('topics').find().toArray(function(err, topics){
          if (err) throw err;
				  var randomIndex;
				  var result = [];
				  
				  while (result.length < 12) {
				    
				    randomIndex = Math.floor(Math.random() *  (topics.length - 1));
				    
				    if (result.indexOf(topics[randomIndex]) === -1){
				        result.push(topics[randomIndex]);
				    }
				  }

				  reply(result);
        });
      }
    },
    //get a user's topics
    {
			method:'GET',
			path: '/users/{username}/topics',
			handler: function(request, reply) {
				var db = request.server.plugins['hapi-mongodb'].db;
				var username = encodeURIComponent(request.params.username);
				
				db.collection('users').findOne({ "username": username }, function(err, user) {
					if (err) {
						return reply('Internal MongoDB error', err);
					}

					db.collection('topics').find({ "user_id": user._id }).toArray(function(err, topics) {
						if (err) {
							return reply('Internal MongoDB error', err);
						}
						reply(topics);
					});
				});
			}
		},
		//get a topic's topics
    {
			method:'GET',
			path: '/topics/{title}',
			handler: function(request, reply) {
				var db = request.server.plugins['hapi-mongodb'].db;
				var title = encodeURIComponent(request.params.title);
				
				db.collection('topics').find({ "titles": {$in: [title]}}).toArray(function(err, topics) {
					if (err) {
						return reply('Internal MongoDB error', err);
					}
					reply(topics);
				});
			}
		},
	  // Delete one topic
		{
		  method: 'DELETE',
		  path: '/topics/{id}',
		  handler: function(request, reply) {
		    Auth.authenticated(request, function(result) {
		      if (result.authenticated) {
		        var topic = encodeURIComponent(request.params.id);

		        var db = request.server.plugins['hapi-mongodb'].db;
		        var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

		        db.collection('topics').remove({ "_id": ObjectID(topic) }, function(err, writeResult) {
		          if (err) { return reply('Internal MongoDB error', err); }

		          reply(writeResult);
		        });
		      } else {
		        reply(result.message);
		      }
		    });
		  }
		}
	]);

	next();
};

//give this file some attributes
exports.register.attributes = {
	name: 'topics-route',
	version: '0.0.1'
};