//routes/logs.js

exports.register = function(server, options, next) {
	//include routes
	server.route([
		//search for user or topic
    {
			method:'GET',
			path: '/logs/search/{searchQuery}',
			handler: function(request, reply) {
				var db = request.server.plugins['hapi-mongodb'].db;
				var searchQuery = encodeURIComponent(request.params.searchQuery);
				
				db.collection('topics').find({ "titles": {$in: [searchQuery]}}).toArray(function(err, topics) {
		 			if (err) {
		 				return reply('Internal MongoDB error', err);
		 			} else if (topics.length < 1) {
						db.collection('users').findOne({ "username": searchQuery }, function(err, user) {
							if (err) {
								return reply('Internal MongoDB error', err);
							}

							db.collection('topics').find({ "user_id": user._id }).toArray(function(err, topics) {
								if (err) {
									return reply('Internal MongoDB error', err);
								}
								return reply(topics);
							});
						});
		 			} else {
			 			return reply(topics);
		 			}
		 		});
			}
		}
	]);

	next();
};

//give this file some attributes
exports.register.attributes = {
	name: 'logs-route',
	version: '0.0.1'
};