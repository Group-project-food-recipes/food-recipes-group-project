var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    provider: {
        type: String,
        default: 'none'
    }
    
});

var User = mongoose.model('User', userSchema)

 module.exports = User