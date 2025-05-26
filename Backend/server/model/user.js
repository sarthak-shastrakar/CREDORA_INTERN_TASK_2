const mongoose = require('mongoose');
const validator = require('validator');
const UserSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
    unique:true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: 'Invalid email address',
    },
   },
   password:{
    type:String,
    required:true,
   }
},
{collection:'Userdbs'});

const Userdb=mongoose.model('Userdb',UserSchema)
module.exports = Userdb;