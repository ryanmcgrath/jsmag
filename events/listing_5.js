var TwitterStream = require('./twitterstream'),
	util = require('util');

var twitter = new TwitterStream({
	username: 'username',
	password: 'password',
	track: 'JavaScript',
});

twitter.on('tweet', function(tweet) {
	util.puts(util.inspect(tweet));
})

twitter.on('error', function(e) { 
	util.puts(e); 
})

twitter.getTweets();
