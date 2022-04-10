const {Schema, model}= require('mongoose');

//create blueprint for user model
const userSchema= new Schema({
    username: {
        type: String
    },

    email: {
        type: String
    },

    opinion: {
        type: String
    },

    postedOn: {
        type: Date,
        default: Date.now
    }

    //comments: [],

    //friends: []

});

//create user model and export it
const User= model('User', userSchema);
module.exports= User;