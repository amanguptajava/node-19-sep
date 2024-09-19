const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Studentschema = new schema({
  rollNo:{ type:String },
  name:{type:String },
  fatherName:{type:String },
  adharCardNo:{type:String },
  mobileNo:{type:String } 
})

module.exports = mongoose.model('Student',Studentschema)