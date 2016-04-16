var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipsSchema = new Schema({
    type: String ,
    content: String
});

var Tips = mongoose.model('Tips', tipsSchema);

var db = {
    Tips: Tips
}

module.exports = db;