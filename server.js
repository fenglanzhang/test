var express = require('express')

var app = express()
app.get('*', function (req, res) {
	res.sendFile(__dirname + req.path)
})
app.listen('8881', function () {
	console.log('success')
})