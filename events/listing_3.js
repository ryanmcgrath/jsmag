var util = require('util'),
	http = require('http'),
	events = require('events');

var TwitterStream = function(opts) {
	this.username = opts.username;
	this.password = opts.password;
	this.track = opts.track;
	this.data = '';
};

TwitterStream.prototype = new events.EventEmitter;
module.exports = TwitterStream;
