var express    = require('express'); 		// call express
var mongoose   = require('mongoose');
var app        = express();
var Instrument   = require('./models/instrument.js');


var router = express.Router(); 
require( './routes' )( router, Instrument );
app.use(router);

mongoose.connect('mongodb://localhost/test');

var port = process.env.PORT || 8000;
app.listen(port);
console.log('now serving on port ' + port);