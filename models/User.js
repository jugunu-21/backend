const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    pword: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true
    
    },
    date: {
        type:Date,
        dafult:Date.now
        
}
});
module.exports = mongoose.model('user', userSchema);