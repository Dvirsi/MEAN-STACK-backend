const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name : String,
        email : String,
        street : String,
        city : String,
        zipcode : Number,

        tasks : [ 
            {
                _id : Number,
                title : String,
                completed : Boolean
            }],

        posts : [
            {
                _id: Number,
                title : String,
                body : String
            }]
})

module.exports = mongoose.model('users', userSchema)