var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
  type: String,
  owner: String,
  year: Date
});


module.exports = mongoose.model('Instrument', InstrumentSchema);